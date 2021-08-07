import { DAT_GHE, HUY_GHE } from "../types";

const BTDatVe = {
  danhSachGheDangDat: [
    //{soGhe:1,gia:1000}
  ],
};

const BTDatVeReducer = (state = BTDatVe, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe == action.ghe.soGhe
      );

      if (index !== -1) {
        // ghế đang chọn đã có trong mảng thì remove
        danhSachGheUpdate.splice(index, 1);
      } else {
        //ghế đang chọn chưa có trong mảng thì thêm vào
        danhSachGheUpdate.push(action.ghe);
      }

      state.danhSachGheDangDat = danhSachGheUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      let danhSachGheUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe == action.soGhe
      );

      if (index !== -1) {
        // ghế đang chọn đã có trong mảng thì remove
        danhSachGheUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BTDatVeReducer;
