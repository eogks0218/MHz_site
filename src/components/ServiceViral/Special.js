import { GoThumbsup } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { FcOvertime } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";

export default function Special(){

    return(
        <>
            <div className="specialBox">
                <div className="specialTitle">
                    <GoThumbsup />
                    <p>품질 높은 발행 계정</p>
                </div>
                <div className="specialContent">
                    <p>공장처럼 찍어내는 계정으로 작업하게 되시면 효율이 나올 수가 없습니다.</p>
                </div>
            </div>
            <div className="specialBox">
                <div className="specialTitle">
                    <TfiWrite />
                    <p>원고 작성 능력</p>
                </div>
                <div className="specialContent">
                    <p>제목, 본문, 말투부터 마침표 하나까지 신경 쓰는 디테일로 카페, 커뮤니티 특성에 맞춰 정확히 맞춤된 원고로 진입해야 합니다.</p>
                </div>
            </div>
            <div className="specialBox">
                <div className="specialTitle">
                    <FcOvertime />
                    <p>당일 게시,<br />자정, 주말 작업 가능</p>
                </div>
                <div className="specialContent">
                    <p>A부터 Z까지 직접 진행하며 신속성과 정확성 그리고 정확한 타켓팅을 목표로 합니다.</p>
                </div>
            </div>
            <div className="specialBox">
                <div className="specialTitle">
                    <VscFeedback />
                    <p>즉각적인 1:1 피드백</p>
                </div>
                <div className="specialContent">
                    <p>다양한 돌발 상황들 또한 완벽 대응 가능하며 게시 전, 게시 후 밀착 피드백이 가능합니다.<br/>즉각 반응이 나오는 곳임으로 피드백 속도는 생명입니다.</p>
                </div>
            </div>
        </>
    )
}