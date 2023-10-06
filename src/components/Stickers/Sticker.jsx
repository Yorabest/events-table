export const Sticker = ({ name, sticker, onStickerClick}) => {
    return <>
        <div>
            <img src={sticker} alt={name} onClick={()=>{onStickerClick(name)}}/>
            <p>{name}</p>
        </div></>
    

}