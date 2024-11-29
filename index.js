// 显示/隐藏菜单并切换按钮
function toggleMenu() {
    const menu = document.getElementById("fullscreenMenu");
    const button = document.querySelector(".menu-button");

    // 切换菜单显示状态
    if (menu.classList.contains("show")) {
        // 如果菜单已经显示，则渐出并隐藏
        menu.style.transition = "opacity 0.5s ease";
        menu.style.opacity = '0';

        // 设置延时隐藏 visibility
        setTimeout(function() {
            menu.style.visibility = 'hidden';
        }, 500); // 500ms后隐藏，确保渐变效果完成

        // 更新按钮文本
        button.textContent = "☰";
    } else {
        // 如果菜单是隐藏的，则渐入并显示
        menu.style.transition = "opacity 0.5s ease";
        menu.style.visibility = 'visible';  // 先显示，防止直接消失
        menu.style.opacity = '1';           // 然后设置渐变效果

        // 更新按钮文本
        button.textContent = "×";
    }

    // 切换菜单的 show 类
    menu.classList.toggle("show");
}

// 监听窗口大小变化，判断是否需要自动关闭菜单
window.addEventListener('resize', function() {
    const menu = document.getElementById("fullscreenMenu");
    const button = document.querySelector(".menu-button");

    // 当窗口宽度大于 800px 时，自动关闭菜单
    if (window.innerWidth > 800 && menu.classList.contains("show")) {
        menu.style.transition = "opacity 0.5s ease";
        menu.style.opacity = '0';

        setTimeout(function() {
            menu.style.visibility = 'hidden';
        }, 500);  // 500ms后隐藏

        button.textContent = "☰";  // 改回 "☰" 按钮

        // 隐藏菜单时也要加上渐出效果
        menu.classList.remove("show");
    }
});

// 确保页面加载时，菜单初始状态正确
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById("fullscreenMenu");
    const button = document.querySelector(".menu-button");

    // 初始设置为透明且不可见的菜单
    menu.style.opacity = '0';
    menu.style.visibility = 'hidden';

    // 若页面被重新加载时菜单已显示，更新按钮文本
    if (menu.classList.contains("show")) {
        button.textContent = "×"; // 如果菜单显示，按钮文本为 "X"
    } else {
        button.textContent = "☰"; // 否则为 "☰"
    }
});

