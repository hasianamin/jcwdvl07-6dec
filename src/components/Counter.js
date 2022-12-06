import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  randomNumber,
  generateNumber,
} from "../redux/reducer/counter";
import Cookies from "js-cookie";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const handleCookies = () => {
    Cookies.set("key", counter, { expires: 7 });
    alert(`${counter} berhasil di simpan`);
  };

  const removeCookies = () => {
    Cookies.remove("key");
  };

  const handleLocalStorage = () => {
    localStorage.setItem("key", counter);
    alert(`${counter} berhasil di simpan`);
  };

  const removeLocalStorage = () => {
    localStorage.removeItem("key");
  };

  const handleSession = () => {
    sessionStorage.setItem("key", counter);
    alert(`${counter} berhasil di simpan`);
  };

  const removeSession = () => {
    sessionStorage.removeItem("key");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div onClick={() => dispatch(generateNumber(100))}>ubah counter</div>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        <div
          style={{ border: "1px solid black", padding: "4px" }}
          onClick={() => dispatch(increment())}
        >
          tambah
        </div>
        <div
          style={{ border: "1px solid black", padding: "4px" }}
          onClick={() => dispatch(decrement())}
        >
          kurang
        </div>
        <div
          style={{ border: "1px solid black", padding: "4px" }}
          onClick={() => dispatch(randomNumber())}
        >
          acak
        </div>
      </div>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        <div>
          <div>nilai pada cookie: {Cookies.get("key")}</div>
          <div
            style={{ border: "1px solid black", padding: "4px" }}
            onClick={handleCookies}
          >
            Simpan data di cookie
          </div>
          <div
            style={{ border: "1px solid black", padding: "4px" }}
            onClick={removeCookies}
          >
            Hapus data di cookie
          </div>
        </div>
        <div>
          <div>nilai pada localStorage: {localStorage.getItem("key")}</div>
          <div
            style={{ border: "1px solid black", padding: "4px" }}
            onClick={handleLocalStorage}
          >
            Simpan data di localStorage
          </div>
          <div
            style={{ border: "1px solid black", padding: "4px" }}
            onClick={removeLocalStorage}
          >
            hapus data di localStorage
          </div>
        </div>
        <div>
          <div>nilai pada session: {sessionStorage.getItem("key")}</div>
          <div
            style={{ border: "1px solid black", padding: "4px" }}
            onClick={handleSession}
          >
            Simpan data di session
          </div>
          <div
            style={{ border: "1px solid black", padding: "4px" }}
            onClick={removeSession}
          >
            hapus data di session
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
