import { delay, stagger, transform } from "motion";
import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";

const Path = (props) => {
  <Path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLineCap="round"
    {...props}
  />;
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateY(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacaity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 9, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }, { at: "-0.1" }) },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];
  });

  return <div>Navbar</div>;
}

export default Navbar;
