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
    },
	{
		url: "https://cocoandcoco.base.shop/items/158506378",
		image: "images/product11.jpeg",
		alt: "Jewel Box Bracelet",
		title: "Jewel Box Bracelet",
		jpTitle: "宝石箱ブレス",
		category: "Natural stones",
		description: [
			"彩り豊か",
			"前向きな印象"
		],
		price: "¥6,400",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506371",
		image: "images/product10.jpeg",
		alt: "Iris Opal",
		title: "Iris Opal",
		jpTitle: "虹彩のオパール ",
		category: "Opal",
		description: [
			"自由な発想",
			"自分らしい魅力"
		],
		price: "¥6,400",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506384",
		image: "images/product12.jpeg",
		alt: "Crimson Ruby",
		title: "Crimson Ruby",
		jpTitle: "深紅のルビー",
		category: "Ruby",
		description: [
			"洗練された華やかさ",
			"上品な彩り"
		],
		price: "¥8,800",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506389",
		image: "images/product13.jpeg",
		alt: "Iris Drop",
		title: "Iris Drop",
		jpTitle: "虹彩の雫",
		category: "Opal",
		description: [
			"優雅な輝き",
			"上品な彩り"
		],
		price: "¥6,400",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506394",
		image: "images/product14.jpeg",
		alt: "Crimson Drop",
		title: "Crimson Drop",
		jpTitle: "深紅の雫",
		category: "Ruby",
		description: [
			"優雅な光沢",
			"上品な華やかさ"
		],
		price: "¥6,400",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506398",
		image: "images/product15.jpeg",
		alt: "Crimson Rough Stone",
		title: "Crimson Rough Stone",
		jpTitle: "深紅の原石",
		category: "Ruby",
		description: [
			"優雅な光沢",
			"気品と個性"
		],
		price: "¥6,400",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506406",
		image: "images/product16.jpeg",
		alt: "Starlit Rose Pendant Top",
		title: "Starlit Rose Pendant Top",
		jpTitle: "星空と薔薇のペンダントトップ",
		category: "Lapis Lazuli",
		description: [
			"優しい彩り",
			"知的で華やか"
		],
		price: "¥18,000",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506411",
		image: "images/product17.jpeg",
		alt: "Aster Amethyst Pendant Top",
		title: "Aster Amethyst Pendant Top",
		jpTitle: "紫苑のアメジスト ペンダントトップ",
		category: "Amethyst",
		description: [
			"落ち着きと気品",
			"洗練された美しさ"
		],
		price: "¥18,000",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506416",
		image: "images/product18.jpeg",
		alt: "Crimson Garnet Pendant Top",
		title: "Crimson Garnet Pendant Top",
		jpTitle: "深紅のガーネット ペンダントトップ",
		category: "Garnet",
		description: [
			"洗練された華やかさ",
			"特別感のある彩り"
		],
		price: "¥18,000",
		tag: "New"
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