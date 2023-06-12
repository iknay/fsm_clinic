import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as EntSvg } from '../assets/ent.svg';

type Props = {
  directionLeft?: boolean;
};

const Ent = ({ directionLeft }: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="cursor-pointer group">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className="flex md:w-[220px] md:h-[180px] xl:w-[270px] xl:h-[200px] w-[150px] h-[105px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <EntSvg
          className={isHovered ? 'filter-darkgreen' : ''}
        />
        <motion.style>{`
          .filter-darkgreen path {
            // filter: brightness(0) hue-rotate(50deg);
            fill: #083902;
            transition: fill 0.3s ease-in-out;
          }
        `}</motion.style>
      </motion.div>
    </div>
  );
};

export default Ent;
