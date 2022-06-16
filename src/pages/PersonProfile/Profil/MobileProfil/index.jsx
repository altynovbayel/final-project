import React from 'react';
import cs from './Profil.module.scss'
import {getUser, updatePrfile} from "../../../../configs";
import useIsLogin from "../../../../hooks/useIsLogin";
import {BsFillPencilFill} from "react-icons/bs";
import {signOut} from "firebase/auth";
import {auth} from "../../../../services/firebase/firebase";
import {useNavigate} from "react-router-dom";
const MobileProfile = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    getUser(isAuth.uid).then(res => {
      if(!res.data){
        updateKeysFireBase()
      }else {
        setData(res.data)
      }
    })
  }, [])

  const {isAuth} = useIsLogin()

  const [data , setData] = React.useState(null)
  console.log(data)

  function postUpdate(){
    updatePrfile(isAuth.uid , data)
  }

  function updateKeysFireBase(){
    updatePrfile(isAuth.uid , {
      usernames: '',
      years: '',
      numbers: '',
      urlDefults:'https://api-private.atlassian.com/users/2e5afb4451de305435994b4dbca95d38/avatar'
    })
  }

  if(!data) return <h1></h1>

  return (
    <div className={cs.Profile}>
      <div className={cs.cards}>
        <div className={cs.cards_header}>
          <div className={cs.headers_image}>
            <img src={data.url ? data.url : data.urlDefults} alt=""/>
          </div>
        </div>
        <div className={cs.cards_body}>
          <label>
            <input
              onChange={e => setData({...data , url: e.target.value})}
              type="text"
              placeholder='URL на картинку'
            />
            <BsFillPencilFill className={cs.icons}/>
          </label>
          <label>
            <input
              onChange={e => setData({...data , usernames: e.target.value})}
              type="text"
              defaultValue={data.usernames}
              placeholder='Names'
            />
            <BsFillPencilFill className={cs.icons}/>
          </label>
          <label>
            <input
              onChange={e => setData({...data , numbers: e.target.value})}
              type="text"
              defaultValue={data.numbers}
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