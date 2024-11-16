import React, { useEffect, useRef, useState } from 'react'
import MainLayout from '../infrastructure/Layout/Client-Layout'
import "../assets/css/page/Map.css"
import ChartBar from './components/ChartBar';
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
    "pk.eyJ1IjoibnRkMTAxMDIwMDAiLCJhIjoiY2tvbzJ4anl1MDZjMzJwbzNpcnA5NXZpcCJ9.dePfFDv0RlCLnWoDq1zHlw";


const MapPage = () => {
    const _map = useRef(null);

    const [isOpenLayer, setIsOpenLayer] = useState(false);
    const [isOpenDashboard, setIsOpenDashboard] = useState(false);
    const [map, setMap] = useState({});
    const [anhVeTinh, setAnhVeTinh] = useState({});


    const onOpenLayer = () => {
        setIsOpenLayer(!isOpenLayer);
    }

    const onOpenDashboard = () => {
        setIsOpenDashboard(!isOpenDashboard);
    }

    const fetchData = () => {
        let map = new mapboxgl.Map({
            container: _map.current,
            zoom: 10,
            center: [107.236898, 21.241870],
            style: "mapbox://styles/mapbox/streets-v12",
        });
        setMap(map);
        map.on('load', () => {
            map.addSource("ranh_gioi_huyen", {
                type: "geojson",
                data: `http://localhost:3100/dataGeoJson?tenbang=ranh_gioi_huyen`,
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
                data: `http://localhost:3100/dataGeoJson?tenbang=ranh_gioi_tinh`,
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
        fetch('http://localhost:3100/sentinel2?time_start1=2024-05-01&time_end1=2024-06-30&time_start2=2024-06-01&time_end2=2024-08-30')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setAnhVeTinh(data);
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
            })
            .catch((error) => {
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
                        <i className="fa fa-search"></i>
                    </button>
                    <button className="map-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa fa-bars"></i>
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
                        <h4>Điểm khảo sát Sentinel 2</h4>
                        <div className="layer-item">
                            <input type="checkbox" />
                            <span className="color-indicator"></span>
                            <span>DKS_04_11_2022</span>
                        </div>
                        <h4>Điểm khảo sát Landsat 8</h4>
                        <div className="layer-item">
                            <input type="checkbox" />
                            <span className="color-indicator"></span>
                            <span>DKS_06_09_2022_L8</span>
                        </div>

                        {
                            anhVeTinh.img1 && <div className="layer-item">
                                <input type="checkbox" name={`img1`} defaultChecked={true} onClick={btDiaDiemDuLich}

                                    id={`img1`}
                                    value={`img1`} />
                                <span className="color-indicator"></span>
                                <span>img1</span>
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
                                <input type="date" id="start-date" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-date">Ngày kết thúc</label>
                                <input type="date" id="end-date" className="form-control" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" onClick={xemAnh} className="btn btn-primary" data-bs-dismiss="modal">Xem</button>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default MapPage