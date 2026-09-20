const products = [
    {
        url: "https://cocoandcoco.base.shop/items/155857470",
        image: "images/product1.jpeg",
        alt: "Azure Sky",
        title: "Azure Sky",
        jpTitle: "青空",
        category: "Neon Blue Apatite",
        description: [
            "自由な発想、",
            "気持ちを爽やかに。"
        ],
        price: "¥4,800",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155858614",
        image: "images/product2.jpeg",
        alt: "Four Seasons’ Radiance",
        title: "Four Seasons’ Radiance",
        jpTitle: "四季彩の輝き",
        category: "Lapis lazuli",
        description: [
            "本質を見つめ、",
            "視野を広げる。"
        ],
        price: "¥4,800",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155859061",
        image: "images/product3.jpeg",
        alt: "Forest Dew",
        title: "Forest Dew",
        jpTitle: "森の雫",
        category: "Moss green kyanite",
        description: [
            "知的で洗練、",
            "派手すぎない存在感。"
        ],
        price: "¥3,600",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155859461",
        image: "images/product4.jpeg",
        alt: "Three Pearls",
        title: "Three Pearls",
        jpTitle: "三つの真珠",
        category: "Baroque pearl",
        description: [
            "上品さと華やかさ、",
            "さりげない個性。"
        ],
        price: "¥4,200",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155859674",
        image: "images/product5.jpeg",
        alt: "Prism of Light",
        title: "Prism of Light",
        jpTitle: "光のプリズム",
        category: "Lemon Quartz",
        description: [
            "洗練された華やかさ、",
            "上品で軽やか。"
        ],
        price: "¥4,200",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155860990",
        image: "images/product6.jpeg",
        alt: "Hydrangea",
        title: "Hydrangea",
        jpTitle: "紫陽花",
        category: "Amethyst",
        description: [
            "やわらかな彩り、",
            "落ち着いた華やかさ。"
        ],
        price: "¥4,200",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155861399",
        image: "images/product7.jpeg",
        alt: "Honey Glow",
        title: "Honey Glow",
        jpTitle: "蜂蜜のひかり",
        category: "Lemon Quartz",
        description: [
            "派手すぎず、",
            "上品に寄り添う。"
        ],
        price: "¥3,600",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155862068",
        image: "images/product8.jpeg",
        alt: "Indigo Dew",
        title: "Indigo Dew",
        jpTitle: "藍の雫",
        category: "Moss green kyanite",
        description: [
            "シックな深み、",
            "知性と品のよさ。"
        ],
        price: "¥4,200",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155862428",
        image: "images/product9.jpeg",
        alt: "Violet Light",
        title: "Violet Light",
        jpTitle: "紫の光",
        category: "Amethyst",
        description: [
            "澄んだ透明感、",
            "落ち着いた華やかさ。"
        ],
        price: "¥3,600",
        tag: "NEW"
    }
];

const productList = document.getElementById("product-grid");

products.forEach(product => {
    const card = document.createElement("a");
    card.href = product.url;
    card.className = "product-card";
    card.innerHTML = `
        <div class="product-image">
            <img
                src="${product.image}"
                alt="${product.alt}"
            >
            ${
                product.tag
                ? `<span class="product-tag">${product.tag}</span>`
                : ""
            }
        </div>
        <div class="product-info">
            <p class="product-category">
                ${product.category}
            </p>
            <h3>
                ${product.title}<br>
                <span class="jp-title">
                    ${product.jpTitle}
                </span>
            </h3>
            <p class="product-description">
                ${product.description.join("<br>")}
            </p>
            <p class="product-price">
                ${product.price}
            </p>
        </div>
    `;
    productList.appendChild(card);
});