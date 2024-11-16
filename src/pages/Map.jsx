import React, { useEffect, useRef, useState } from 'react'
import MainLayout from '../infrastructure/Layout/Client-Layout'
import "../assets/css/page/Map.css"
import ChartBar from './components/ChartBar';
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { FullPageLoading } from '../infrastructure/common/loading';

mapboxgl.accessToken =
    "pk.eyJ1IjoibnRkMTAxMDIwMDAiLCJhIjoiY2tvbzJ4anl1MDZjMzJwbzNpcnA5NXZpcCJ9.dePfFDv0RlCLnWoDq1zHlw";


const MapPage = () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const _map = useRef(null);
    const [loading, setLoading] = useState(false);

    const [isOpenLayer, setIsOpenLayer] = useState(false);
    const [isOpenDashboard, setIsOpenDashboard] = useState(false);
    const [map, setMap] = useState({});
    const [anhVeTinh, setAnhVeTinh] = useState({});
    const [startDate1, setStartDate1] = useState("");
    const [endDate1, setEndDate1] = useState("");

    const [startDate2, setStartDate2] = useState("");
    const [endDate2, setEndDate2] = useState("");
    const onOpenLayer = () => {
        setIsOpenLayer(!isOpenLayer);
    }

    const onOpenDashboard = () => {
        setIsOpenDashboard(!isOpenDashboard);
    }

    const fetchData = () => {
        setLoading(true);
        let map = new mapboxgl.Map({
            container: _map.current,
            zoom: 10,
            center: [107.236898, 21.241870],
            style: "mapbox://styles/mapbox/streets-v12",
        });
        setMap(map);
        setLoading(false);
        map.on('load', () => {
            map.addSource("ranh_gioi_huyen", {
                type: "geojson",
                data: `${baseURL}/dataGeoJson?tenbang=ranh_gioi_huyen`,
            });

            map.addLayer({
                id: "ranh_gioi_huyen",
                type: "line",
                source: "ranh_gioi_huyen",
                layout: {},
                paint: {
                    "line-color": "#094174",
                    "line-width": 2,
                },
            });
            // Load an image from an external URL.
            map.addSource("ranh_gioi_tinh", {
                type: "geojson",
                data: `${baseURL}/dataGeoJson?tenbang=ranh_gioi_tinh`,
            });

            map.addLayer({
                id: "ranh_gioi_tinh",
                type: "line",
                source: "ranh_gioi_tinh",
                layout: {},
                paint: {
                    "line-color": "#FE7524",
                    "line-width": 4,
                },
            });
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const xemAnh = () => {
        setLoading(true);
        fetch(`${baseURL}/sentinel2?time_start1=${startDate1}&time_end1=${endDate1}&time_start2=${startDate2}&time_end2=${endDate2}`)
            // fetch(`http://103.130.212.145:23106/sentinel2?time_start1=2024-05-01&time_end1=2024-06-30&time_start2=2024-06-01&time_end2=2024-08-28`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setLoading(false);
                setAnhVeTinh(data);
                ///img1
                if (map.getLayer("img1")) {
                    map.removeLayer("img1");
                }
                if (map.getSource("img1")) {
                    map.removeSource("img1");
                }
                map.addSource("img1", {
                    type: "raster",
                    tiles: [data.img1],
                });
                map.addLayer(
                    {
                        id: "img1",
                        type: "raster",
                        source: "img1",

                    },
                );
                ///img2
                if (map.getLayer("img2")) {
                    map.removeLayer("img2");
                }
                if (map.getSource("img2")) {
                    map.removeSource("img2");
                }
                map.addSource("img2", {
                    type: "raster",
                    tiles: [data.img2],
                });
                map.addLayer(
                    {
                        id: "img2",
                        type: "raster",
                        source: "img2",

                    },
                );
                ///ndviImageBeforeURL
                if (map.getLayer("ndviImageBeforeURL")) {
                    map.removeLayer("ndviImageBeforeURL");
                }
                if (map.getSource("ndviImageBeforeURL")) {
                    map.removeSource("ndviImageBeforeURL");
                }
                map.addSource("ndviImageBeforeURL", {
                    type: "raster",
                    tiles: [data.ndviImageBeforeURL],
                });
                map.addLayer(
                    {
                        id: "ndviImageBeforeURL",
                        type: "raster",
                        source: "ndviImageBeforeURL",

                    },
                );
                ///ndviImageAfterURL
                if (map.getLayer("ndviImageAfterURL")) {
                    map.removeLayer("ndviImageAfterURL");
                }
                if (map.getSource("ndviImageAfterURL")) {
                    map.removeSource("ndviImageAfterURL");
                }
                map.addSource("ndviImageAfterURL", {
                    type: "raster",
                    tiles: [data.ndviImageAfterURL],
                });
                map.addLayer(
                    {
                        id: "ndviImageAfterURL",
                        type: "raster",
                        source: "ndviImageAfterURL",

                    },
                );
                ///fdiImageBeforeURL
                if (map.getLayer("fdiImageBeforeURL")) {
                    map.removeLayer("fdiImageBeforeURL");
                }
                if (map.getSource("fdiImageBeforeURL")) {
                    map.removeSource("fdiImageBeforeURL");
                }
                map.addSource("fdiImageBeforeURL", {
                    type: "raster",
                    tiles: [data.fdiImageBeforeURL],
                });
                map.addLayer(
                    {
                        id: "fdiImageBeforeURL",
                        type: "raster",
                        source: "fdiImageBeforeURL",

                    },
                );
                /// fdiImageAfterURL
                if (map.getLayer("fdiImageAfterURL")) {
                    map.removeLayer("fdiImageAfterURL");
                }
                if (map.getSource("fdiImageAfterURL")) {
                    map.removeSource("fdiImageAfterURL");
                }
                map.addSource("fdiImageAfterURL", {
                    type: "raster",
                    tiles: [data.fdiImageAfterURL],
                });
                map.addLayer(
                    {
                        id: "fdiImageAfterURL",
                        type: "raster",
                        source: "fdiImageAfterURL",

                    },
                );
                /// debrisBeforeURL
                if (map.getLayer("debrisBeforeURL")) {
                    map.removeLayer("debrisBeforeURL");
                }
                if (map.getSource("debrisBeforeURL")) {
                    map.removeSource("debrisBeforeURL");
                }
                map.addSource("debrisBeforeURL", {
                    type: "raster",
                    tiles: [data.debrisBeforeURL],
                });
                map.addLayer(
                    {
                        id: "debrisBeforeURL",
                        type: "raster",
                        source: "debrisBeforeURL",

                    },
                );
                /// debrisAfterURL
                if (map.getLayer("debrisAfterURL")) {
                    map.removeLayer("debrisAfterURL");
                }
                if (map.getSource("debrisAfterURL")) {
                    map.removeSource("debrisAfterURL");
                }
                map.addSource("debrisAfterURL", {
                    type: "raster",
                    tiles: [data.debrisAfterURL],
                });
                map.addLayer(
                    {
                        id: "debrisAfterURL",
                        type: "raster",
                        source: "debrisAfterURL",

                    },
                );

            })
            .catch((error) => {
                setLoading(false);
                console.log('xemAnh ', error);
            });
    }

    const btDiaDiemDuLich = (e) => {
        document.getElementById(e.target.value).checked = e.target.checked;
        map.setLayoutProperty(

            e.target.value,
            "visibility",
            e.target.checked ? "visible" : "none"
        );
    };

    return (
        <MainLayout>
            <div className='map-container'>
                <div className='map-controls-left'>
                    <button className="map-button" onClick={onOpenDashboard}>
                        <i className="fa fa-area-chart" aria-hidden="true"></i>
                    </button>
                    <button className="map-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa fa-search"></i>
                    </button>
                    <label htmlFor="upload-multi" className="map-button">
                        <input type="file" name="" id="upload-multi" multiple />
                        <i className="fa fa-cloud-upload"></i>
                    </label>
                </div>

                <div className='map-controls-right'>
                    <button className="map-button" onClick={onOpenLayer}>
                        <svg aria-hidden="true" width="16" height="16" focusable="false" data-prefix="fas" data-icon="layer-group" className="svg-inline--fa fa-layer-group " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" color="#fff">
                            <path fill="currentColor" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z">
                            </path>
                        </svg>
                    </button>
                    <button className="map-button"><i className="fa fa-square-o"></i></button>
                </div>
                {
                    isOpenLayer
                    &&
                    <div className="map-layers-panel">
                        <button className="close-btn" onClick={onOpenLayer}>&times;</button>
                        <h3>Các lớp bản đồ</h3>
                        <div className="layer-item">
                            <input type="checkbox" checked />
                            <span className="color-indicator"></span>
                            <span>Ranh giới hồ</span>
                        </div>
                        <h4>Điểm quan trắc</h4>
                        <div className="layer-item">
                            <input type="checkbox" checked />
                            <span className="color-indicator"></span>
                            <span>Điểm mới thêm</span>
                        </div>
                        <h4>Sentinel</h4>
                        {
                            anhVeTinh.img1 && <div className="layer-item">
                                <input type="checkbox" name={`img1`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`img1`}
                                    value={`img1`} />
                                <span className="color-indicator"></span>
                                <span>img1</span>
                            </div>

                        }
                        {
                            anhVeTinh.img2 && <div className="layer-item">
                                <input type="checkbox" name={`img2`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`img2`}
                                    value={`img2`} />
                                <span className="color-indicator"></span>
                                <span>img2</span>
                            </div>
                        }
                        {
                            anhVeTinh.ndviImageBeforeURL && <div className="layer-item">
                                <input type="checkbox" name={`ndviImageBeforeURL`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`ndviImageBeforeURL`}
                                    value={`ndviImageBeforeURL`} />
                                <span className="color-indicator"></span>
                                <span>ndviImageBefore</span>
                            </div>

                        }
                        {
                            anhVeTinh.ndviImageAfterURL && <div className="layer-item">
                                <input type="checkbox" name={`ndviImageAfterURL`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`ndviImageAfterURL`}
                                    value={`ndviImageAfterURL`} />
                                <span className="color-indicator"></span>
                                <span>ndviImageAfter</span>
                            </div>
                        }

                        {
                            anhVeTinh.fdiImageAfterURL && <div className="layer-item">
                                <input type="checkbox" name={`fdiImageAfterURL`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`fdiImageAfterURL`}
                                    value={`fdiImageAfterURL`} />
                                <span className="color-indicator"></span>
                                <span>fdiImageAfter</span>
                            </div>
                        }
                        {
                            anhVeTinh.fdiImageBeforeURL && <div className="layer-item">
                                <input type="checkbox" name={`fdiImageBeforeURL`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`fdiImageBeforeURL`}
                                    value={`fdiImageBeforeURL`} />
                                <span className="color-indicator"></span>
                                <span>fdiImageBefore</span>
                            </div>
                        }
                        {
                            anhVeTinh.debrisBeforeURL && <div className="layer-item">
                                <input type="checkbox" name={`debrisBeforeURL`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`debrisBeforeURL`}
                                    value={`debrisBeforeURL`} />
                                <span className="color-indicator"></span>
                                <span>debrisBefore</span>
                            </div>
                        }
                        {
                            anhVeTinh.debrisAfterURL && <div className="layer-item">
                                <input type="checkbox" name={`debrisAfterURL`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`debrisAfterURL`}
                                    value={`debrisAfterURL`} />
                                <span className="color-indicator"></span>
                                <span>debrisAfter</span>
                            </div>
                        }
                    </div>
                }
                {
                    isOpenDashboard
                    &&
                    <ChartBar onOpenDashboard={onOpenDashboard} />
                }

                <div className="hero" ref={_map}></div>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">TimeLine</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="start-date">Ngày bắt đầu</label>
                                <input type="date" id="start-date" className="form-control"
                                    onChange={(e) => (setStartDate1(e.target.value))}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-date">Ngày kết thúc</label>
                                <input type="date" id="end-date" className="form-control"
                                    onChange={(e) => (setEndDate1(e.target.value))}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-date">Ngày bắt đầu</label>
                                <input type="date" id="start-date" className="form-control"
                                    onChange={(e) => (setStartDate2(e.target.value))}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-date">Ngày kết thúc</label>
                                <input type="date" id="end-date" className="form-control"
                                    onChange={(e) => (setEndDate2(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" onClick={xemAnh} className="btn btn-primary btn-primary-color" data-bs-dismiss="modal">Xem</button>
                        </div>
                    </div>
                </div>
            </div>
            <FullPageLoading isLoading={loading} />
        </MainLayout>
    )
}

export default MapPage