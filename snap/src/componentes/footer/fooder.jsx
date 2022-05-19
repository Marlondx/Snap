import databiz from '../../images/client-databiz.svg'
import audiophile from '../../images/client-audiophile.svg'
import meet from '../../images/client-meet.svg'
import maker from '../../images/client-maker.svg'
import style from './footercss.css'
function Footer(params) {
    return(
        <footer className={style}>
            
           <div className='rodape'>
                <img src={databiz} alt="" />
                <img src={audiophile} alt="" />
                <img src={meet} alt="" />
                <img src={maker} alt="" />
           </div>
            
        </footer>
    )
}

export default Footer