import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "./../redux/actions";

class ThongTinGhe extends Component {
  render() {
    const { danhSachGheDangDat, dispatch } = this.props;
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đang chọn
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "20px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-light">
                <td>Tổng tiền:</td>
                <td>
                  {danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinGhe);
