import React, { useEffect, useRef } from 'react'

export const Marquee = ({children, selector, as: Element = 'div', ...props}) => {

    const marquee = useRef(null)

    function getObjectWidth(obj) {
        if (obj.offsetWidth) return obj.offsetWidth;
        if (obj.clip) return obj.clip.width;
        return 0;
    }

    const marqueeContainers = [];

    function createMarqueeContainer() {
        const container = marquee.current;
        const itemWidth = getObjectWidth(container.getElementsByTagName(selector)[0]) + 5;
        const fullWidth = getObjectWidth(container);
        const textContent = container.getElementsByTagName(selector)[0].innerHTML;
        container.innerHTML = "";
        const height = container.style.height;

        console.log(textContent);

        container.onmouseout = () => rotateMarquee(marqueeContainers);

        container.onmouseover = () => cancelAnimationFrame(marqueeContainers[0].animationID);

        container.items = [];
        const maxItems = Math.ceil(fullWidth / itemWidth) + 1;

        for (let i = 0; i < maxItems; i++) {
            container.items[i] = document.createElement("div");
            container.items[i].innerHTML = textContent;
            container.items[i].style.position = "absolute";
            container.items[i].style.left = itemWidth * i + "px";
            container.items[i].style.width = itemWidth + "px";
            container.items[i].style.height = height;
            container.appendChild(container.items[i]);
        }

        marqueeContainers.push(container);
    }

    function rotateMarquee(containers) {
        if (!containers) return;

        for (let j = containers.length - 1; j > -1; j--) {
            const maxItems = containers[j].items.length;

            for (let i = 0; i < maxItems; i++) {
                const itemStyle = containers[j].items[i].style;
                itemStyle.left = parseInt(itemStyle.left, 10) - 1 + "px";
            }

            const firstItemStyle = containers[j].items[0].style;

            if (parseInt(firstItemStyle.left, 10) + parseInt(firstItemStyle.width, 10) < 0) {
                const shiftedItem = containers[j].items.shift();
                shiftedItem.style.left = parseInt(shiftedItem.style.left) + parseInt(shiftedItem.style.width) * maxItems + "px";
                containers[j].items.push(shiftedItem);
            }
        }

        containers[0].animationID = requestAnimationFrame(() => rotateMarquee(containers));
    }

    useEffect(() => {
        createMarqueeContainer();
        rotateMarquee(marqueeContainers);
    }, [])

    return (
        <Element ref={marquee} {...props}>
            {children}
        </Element>
    )
}
