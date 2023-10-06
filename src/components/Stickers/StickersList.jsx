import { Component } from "react";
import { Sticker } from "./Sticker";

export const StickersList = ({stickers, onStickerClick}) => {

        return (
            <ul>
                {stickers.map(({ img, label }) => {
                    return <li key={label}>
                        <Sticker
                            name={label}
                            sticker={img}
                            onStickerClick={onStickerClick}
                        />
                    </li>
                })}
            </ul>
        )
    }
