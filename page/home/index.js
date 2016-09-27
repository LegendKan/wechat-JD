Page({
    data: {
        background: ['green', 'red', 'yellow'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        swipers:[{
            image:"/image/jd1.jpg"
        },{
            image:"/image/jd2.jpg"
        },{
            image:"/image/jd3.jpg"
        },{
            image:"/image/jd4.jpg"
        },{
            image:"/image/jd5.jpg"
        }
        ],
        logos:[{
            image:"/image/logo1.png",
            title:"京东超市"
        },{
            image:"/image/logo2.png",
            title:"全球购"
        },{
            image:"/image/logo3.png",
            title:"服装城"
        },{
            image:"/image/logo4.png",
            title:"京东生鲜"
        },{
            image:"/image/logo5.png",
            title:"京东到家"
        },{
            image:"/image/logo6.png",
            title:"充值中心"
        },{
            image:"/image/logo7.png",
            title:"京东金融"
        },{
            image:"/image/logo8.png",
            title:"物流查询"
        },{
            image:"/image/logo9.png",
            title:"领券"
        },{
            image:"/image/logo10.png",
            title:"我的关注"
        }
        ],
        quicks:[{
            image:"/image/quick1.jpg",
            price:"￥123"
        },{
            image:"/image/quick2.jpg",
            price:"￥124"
        },{
            image:"/image/quick3.jpg",
            price:"￥125"
        },{
            image:"/image/quick4.jpg",
            price:"￥126"
        },{
            image:"/image/quick5.jpg",
            price:"￥127"
        },{
            image:"/image/quick6.jpg",
            price:"￥128"
        }
        ]
    },
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeVertical: function (e) {
        this.setData({
            vertical: !this.data.vertical
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    }
})
