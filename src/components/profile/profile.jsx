import { StyledComponent } from "./profile.styled"
import Image from "next/Image"

/**
 * ProfileBoxの種類
 * title
 * 各所にtext
 * list
 * image
 * iframe
 */


export default () => {
    return (
        <StyledComponent>
            <Image src="/profile.png" width="200" height="200" />
            <div className="profile">
                <h2>Profile</h2>
                <p>名前：小林 信之（こばやし のぶゆき）</p>
                <p>生年月日：1991年8月31日（29歳）</p>
                <p>数学教えたり,プログラミング教えたり,受託開発したり,公認心理師の勉強したりしてるフリーランス.</p>
            </div>
        </StyledComponent>
    )
}
