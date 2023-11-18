import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => {
  return (
    <div
      className={`bg-blue-gradient rounded-full w-[140px] h-[140px] ${styles.flexCenter} p-[2px] cursor-pointer`}
    >
      <div
        className={`bg-primary rounded-full w-[100%] h-[100%] ${styles.flexCenter} flex-col`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted