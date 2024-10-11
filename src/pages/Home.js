import { useEffect } from "react";
import { useNotContext } from "../hooks/useNotContext";

import NotDetay from "../components/NotDetay";
import NotForm from "../components/NotForm";

import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  //const [notlar,setNotlar]=useState(null)
  const { notlar, dispatch } = useNotContext();

  const { kullanici } = useAuthContext();
  //sayfa açıldığında işlemlerin yapılmasını istediğimizden useEffect oluşturuyoruz.
  useEffect(() => {
    //uzak sunucudan bilgileri alalım
    const fetchNotlar = async () => {
      //api istek atıyoruz
      const response = await fetch("/api/notlar", {
        headers: {
          Authorization: `Bearer ${kullanici.token}`,
        },
      });
      //gelen veriyi alıyoruz
      const bilgi = await response.json();

      if (response.ok) {
        
        dispatch({ type: "NOT_DOLDUR", payload: bilgi });
      }
    };
    //verilerin düzgün gelip geelmediğini kontrol ediyoruz.
    if (kullanici) {
      fetchNotlar();
    }
    //fetchNotlar()
  }, [dispatch, kullanici]);

  return (
    <div className="home">
      <div className="not-form">
        <NotForm />
      </div>
      <hr />
      {/* useEffect le elde ettiğimiz veriyi ekrana basacağız. */}
      <div className="notlar">
        {notlar && notlar.map((not) => <NotDetay key={not._id} not={not} />)}
      </div>
    </div>
  );
};

export default Home;
