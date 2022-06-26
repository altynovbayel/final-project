import React from 'react';
import cs from './Profil.module.scss'
import {getUser, updatePrfile} from "../../../configs";
import useIsLogin from "../../../hooks/useIsLogin";
import {BsFillPencilFill , BsEyeSlash} from "react-icons/bs";
import {AiFillEye} from 'react-icons/ai'
import {signOut, updateProfile} from "firebase/auth";
import {auth} from "../../../services/firebase/firebase";
import {useNavigate} from "react-router-dom";

const MobileProfile = () => {
  const navigate = useNavigate()
  const {isAuth} = useIsLogin()
  const [data , setData] = React.useState(null)
  const [password , setPassword] = React.useState(false)

  React.useEffect(() => {
    getUser(isAuth.uid).then(res => {
      setData(res.data)
    })
  } , [])

  function postUpdate(){
    updatePrfile(isAuth.uid , data).then()
    updateProfile(isAuth ,{
      displayName: data.username,
      photoURL: data.photo
    })
  }

  if(!data) return <h1></h1>

  return (
        <div className={cs.Profile}>
          <div className={cs.cards}>
            <div className={cs.cards_header}>
              <div className={cs.headers_image}>
                <img src={data.photo} alt=""/>
              </div>
            </div>
            <div className={cs.cards_body}>
              <label>
                <input
                  onChange={e => setData({...data , email: e.target.value})}
                  defaultValue={data.email}
                  type="email"
                  placeholder='email'
                />
                <BsFillPencilFill className={cs.icons}/>
              </label>
              <label>
                <input
                  onChange={e => setData({...data , photo: e.target.value})}
                  type="text"
                  placeholder='URL на картинку'
                />
                <BsFillPencilFill className={cs.icons}/>
              </label>
              <label>
                <input
                  onChange={e => setData({...data , username: e.target.value})}
                  type="text"
                  defaultValue={data.username}
                  placeholder='Names'
                />
                <BsFillPencilFill className={cs.icons}/>
              </label>
              <label>
                <input
                  onChange={e => setData({...data , phoneNumber: e.target.value})}
                  type="text"
                  defaultValue={data.phoneNumber}
                  placeholder='Number'
                />
                <BsFillPencilFill className={cs.icons}/>
              </label>
              <label>
                <input
                  onChange={e => setData({...data , years: e.target.value})}
                  defaultValue={data.years}
                  type="date"
                />
              </label>
              <div className={cs.btn_container}>
                <button
                  className={cs.btn}
                  onClick={() => postUpdate()}
                >
                  Изменить
                </button>
                <button
                  className={cs.btnSignOut}
                  onClick={() => {
                    signOut(auth).then(() => {
                      navigate('/')
                    })
                  }}
                >
                  Выход
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default MobileProfile;