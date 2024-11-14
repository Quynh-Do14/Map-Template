import React, { useState } from 'react'
import MainLayout from '../infrastructure/Layout/Client-Layout'
import "../assets/css/page/Map.css"
const MapPage = () => {
    const [isOpenLayer, setIsOpenLayer] = useState<boolean>(false);
    const onOpenLayer = () => {
        setIsOpenLayer(!isOpenLayer);
    }
    return (
        <MainLayout>
            <div className='map-container'>
                <div className='map-controls-left'>
                    <button className="map-button">
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

                    </div>
                }

                <div className="hero" style={{ backgroundImage: 'url(https://image.bnews.vn/MediaUpload/Org/2024/03/13/googlemaps-bnews-vn-20240313162046.png)' }}></div>
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
                            <button type="button" className="btn btn-primary">Xem</button>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default MapPage