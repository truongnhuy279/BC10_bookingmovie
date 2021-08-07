import React, { Component } from "react";
import "./index.css";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGhe from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingMovie extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={{ index }}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./bookingMovie/bgmovie.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-light display-4">ĐẶT VÉ XEM PHIM</div>
                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <div style={{ fontSize: "25px " }} className="text-light mt-2">
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
