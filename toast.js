"use strict";
const showToast = () => {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.padding = "10px 20px";
    toast.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    toast.style.color = "white";
    toast.style.fontSize = "14px";
    toast.style.borderRadius = "5px";
    toast.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
    toast.style.zIndex = "10000";
    toast.innerText = "Redirected to desktop Wikipedia";
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
};
showToast();
