import "./PopupInfo.css";

interface IPopUp {
  textResurs: string;
  textBokningsstatus: string;
  textTid: string;
}

export default function PopupInfo(props: IPopUp) {
  const { textResurs, textBokningsstatus, textTid } = props;

  return (
    <div className="popUp">
      {textResurs} <br /> {textBokningsstatus}
      <br />
      {textTid}
    </div>
  );
}
