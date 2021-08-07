import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "./../redux/actions";

class HangGhe extends Component {
  renderGhe = () => {
    const { danhSachGheDangDat, hangGhe, datGhe } = this.props;
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      // trạng thái ghế đã bị người khác đặt

      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      //xét trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat} `}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
    const { soHangGhe, hangGhe } = this.props;
    if (soHangGhe === 0) {
      return (
        <div className="ml-4">
          {hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left ml-1 mt-2" style={{ fontSize: 30 }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
