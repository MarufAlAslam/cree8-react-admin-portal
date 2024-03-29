import { Tabs } from "antd";
import Timesheets from "./tabpanes/timesheets";
import Areas from "./tabpanes/area";
import ShiftDetailsTable from "../../../../../shared/DataTable/shiftDetailsTable";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: (
      <p className="flex justify-center items-center">
        <svg
          id="_000000ff"
          data-name="#000000ff"
          xmlns="http://www.w3.org/2000/svg"
          width="25.645"
          height="26.47"
          viewBox="0 0 25.645 26.47"
          className="mr-2"
        >
          <path
            id="Path_1256"
            data-name="Path 1256"
            d="M8.154,0H23.268A2.5,2.5,0,0,1,25.5,1.644,3.328,3.328,0,0,1,25.643,2.9V17.424a.808.808,0,0,1-.264.566L18.969,24.4a1.417,1.417,0,0,1-.46.363,1.079,1.079,0,0,1-.467.054q-3.521,0-7.042,0A6.684,6.684,0,0,1,6.8,26.47H6.326a6.7,6.7,0,0,1-3.813-1.429A6.616,6.616,0,0,1,.118,21.1,8.579,8.579,0,0,1,0,20.123v-.449a6.63,6.63,0,0,1,5.79-6.389q0-5.4,0-10.8A2.479,2.479,0,0,1,6.5.75,2.522,2.522,0,0,1,8.154,0M7.445,2.478q0,5.4,0,10.807A6.627,6.627,0,0,1,12.35,23.16q2.51,0,5.02,0,0-2.9,0-5.793a.829.829,0,0,1,.825-.824q2.9,0,5.792,0,0-7.032,0-14.065a.832.832,0,0,0-.82-.823q-7.449,0-14.9,0a.829.829,0,0,0-.823.824M6.316,14.9a4.96,4.96,0,1,0,2.978.773A4.953,4.953,0,0,0,6.316,14.9m12.71,3.3q0,1.891,0,3.782L22.807,18.2Q20.916,18.2,19.026,18.2Z"
            fill="#fff"
          />
          <path
            id="Path_1257"
            data-name="Path 1257"
            d="M304,80h6.616q0,.827,0,1.654H304Q304,80.827,304,80Z"
            transform="translate(-288.282 -75.864)"
            fill="#fff"
          />
          <path
            id="Path_1258"
            data-name="Path 1258"
            d="M176,128h13.234q0,.827,0,1.653H176Q176,128.83,176,128Z"
            transform="translate(-166.901 -121.385)"
            fill="#fff"
          />
          <path
            id="Path_1259"
            data-name="Path 1259"
            d="M176,176q6.617,0,13.234,0,0,.827,0,1.653H176Q176,176.826,176,176Z"
            transform="translate(-166.901 -166.9)"
            fill="#fff"
          />
          <path
            id="Path_1260"
            data-name="Path 1260"
            d="M112,312.826a.826.826,0,0,1,1.653,0c0,.851,0,1.7,0,2.551.433.443.875.878,1.313,1.317a.88.88,0,0,1,.333.8.825.825,0,0,1-.923.7,1.063,1.063,0,0,1-.66-.415q-.736-.737-1.473-1.473a.827.827,0,0,1-.241-.578Q111.995,314.279,112,312.826Z"
            transform="translate(-106.206 -295.873)"
            fill="#fff"
          />
        </svg>
        Timesheets
      </p>
    ),
    children: <div className="bg-white p-5 rounded">
        <Timesheets />
    </div>,
  },
  {
    key: "2",
    label: (
      <p className="flex justify-center items-center">
        <svg
          id="edit"
          xmlns="http://www.w3.org/2000/svg"
          width="20.931"
          height="20.931"
          viewBox="0 0 20.931 20.931"
          className="mr-2"
        >
          <path
            id="Path_1261"
            data-name="Path 1261"
            d="M16.91.817,6.277,11.45A4.331,4.331,0,0,0,5,14.533V15.7a.872.872,0,0,0,.872.872H7.043A4.331,4.331,0,0,0,10.126,15.3L20.759,4.666a2.725,2.725,0,0,0,0-3.85A2.786,2.786,0,0,0,16.91.817Zm2.616,2.616L8.893,14.066a2.634,2.634,0,0,1-1.85.766h-.3v-.3a2.634,2.634,0,0,1,.766-1.85L18.143,2.05a1,1,0,0,1,1.383,0,.979.979,0,0,1,0,1.383Z"
            transform="translate(-0.639 -0.006)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1262"
            data-name="Path 1262"
            d="M20.059,7.831a.872.872,0,0,0-.872.872v4.379H15.7A2.616,2.616,0,0,0,13.082,15.7v3.489H4.361A2.616,2.616,0,0,1,1.744,16.57V4.361A2.616,2.616,0,0,1,4.361,1.744h7.886a.872.872,0,1,0,0-1.744H4.361A4.366,4.366,0,0,0,0,4.361V16.57a4.366,4.366,0,0,0,4.361,4.361h9.893a4.333,4.333,0,0,0,3.084-1.277l2.316-2.318a4.333,4.333,0,0,0,1.278-3.083V8.7A.872.872,0,0,0,20.059,7.831ZM16.1,18.421a2.6,2.6,0,0,1-1.278.7V15.7a.872.872,0,0,1,.872-.872h3.423a2.63,2.63,0,0,1-.7,1.277Z"
            fill="#0f4c7d"
          />
        </svg>
        Area
      </p>
    ),
    children: <Areas />,
  },
  {
    key: "3",
    label: (
      <p className="flex justify-center items-center">
        <svg
          id="_000000ff"
          data-name="#000000ff"
          xmlns="http://www.w3.org/2000/svg"
          width="27.689"
          height="27.689"
          viewBox="0 0 27.689 27.689"
          className="mr-2"
        >
          <path
            id="Path_1288"
            data-name="Path 1288"
            d="M12.026,0h.389a12.114,12.114,0,0,1,5.828,1.606A12.25,12.25,0,0,1,24,15.3a6.586,6.586,0,0,1,3.385,3.876,7.044,7.044,0,0,1,.307,1.671v.63a6.767,6.767,0,0,1-.7,2.585,6.632,6.632,0,0,1-3.8,3.292,7.018,7.018,0,0,1-1.742.332h-.591a6.537,6.537,0,0,1-3.044-.936A6.616,6.616,0,0,1,15.3,24,12.245,12.245,0,0,1,1.891,18.713,12.119,12.119,0,0,1,0,12.419v-.445A12.26,12.26,0,0,1,12.026,0M10.969,1.7a10.515,10.515,0,0,0-4.5,1.63A10.563,10.563,0,0,0,9.781,22.483a10.67,10.67,0,0,0,5.006-.029,6.5,6.5,0,0,1,7.669-7.669,10.675,10.675,0,0,0,.225-3.908A10.544,10.544,0,0,0,10.969,1.7m9.553,14.62a4.9,4.9,0,0,0-1.863,9.054A4.805,4.805,0,0,0,21.931,26a5.043,5.043,0,0,0,3.824-3.166,4.788,4.788,0,0,0,.049-3.255,4.927,4.927,0,0,0-5.282-3.26Z"
            fill="#0f4c7d"
          />
          <path
            id="Path_1289"
            data-name="Path 1289"
            d="M211,61h1.622v1.622H211Z"
            transform="translate(-199.589 -57.701)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1290"
            data-name="Path 1290"
            d="M98.75,99.944c.381-.383.759-.772,1.15-1.144.377.384.765.759,1.139,1.145q-.572.57-1.142,1.142C99.51,100.712,99.133,100.325,98.75,99.944Z"
            transform="translate(-93.41 -93.457)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1291"
            data-name="Path 1291"
            d="M310.84,99.926c.38-.383.763-.765,1.145-1.146q.578.569,1.146,1.147c-.382.382-.762.765-1.146,1.144Q311.412,100.5,310.84,99.926Z"
            transform="translate(-294.029 -93.438)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1292"
            data-name="Path 1292"
            d="M211,121h1.622q0,2.434,0,4.867h3.245v1.622H211Z"
            transform="translate(-199.589 -114.456)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1293"
            data-name="Path 1293"
            d="M61,211h1.622v1.622H61Z"
            transform="translate(-57.701 -199.589)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1294"
            data-name="Path 1294"
            d="M361,211h1.622v1.622H361Z"
            transform="translate(-341.477 -199.589)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1295"
            data-name="Path 1295"
            d="M98.7,312.015c.383-.382.76-.769,1.149-1.145q.569.573,1.141,1.142c-.373.39-.762.765-1.142,1.149C99.463,312.782,99.083,312.4,98.7,312.015Z"
            transform="translate(-93.362 -294.058)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1296"
            data-name="Path 1296"
            d="M337.6,353.07q1.338-1.333,2.672-2.67c.383.382.768.763,1.147,1.149q-1.911,1.906-3.818,3.815c-.733-.73-1.462-1.464-2.2-2.194q.572-.578,1.149-1.149C336.9,352.372,337.247,352.72,337.6,353.07Z"
            transform="translate(-317.261 -331.45)"
            fill="#0f4c7d"
          />
          <path
            id="Path_1297"
            data-name="Path 1297"
            d="M211,361h1.622q0,.811,0,1.622H211Z"
            transform="translate(-199.589 -341.477)"
            fill="#0f4c7d"
          />
        </svg>
        Shift Details
      </p>
    ),
    children: <ShiftDetailsTable/>,
  },
];
const DetailsTab = () => (
  <Tabs
    className="details-tab"
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
  />
);
export default DetailsTab;
