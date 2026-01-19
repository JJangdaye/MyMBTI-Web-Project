const url = 'https://twelevelovetypes.netlify.app/';
 
 function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '십이간지 연애유형 결과';
    const shareDes = infoList[resultAt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.png';
    const shareURL = url + 'page/result-' +resultAlt + '.html';
    
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            titel: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        },
        buttons: [
            {
                title: '결과 확인하기',
                linkg: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },
        ]
    });
 }
 
 function kakaoShare(){
    Kakao.API.request({
    url: '/v2/api/talk/memo/default/send',
    data: {
        template_object: {
        object_type: 'feed',
        content: {
            title: 'Strawberry cheese cake',
            description: '#cake #strawberry #cafe #atmosphere #blinddate',
            image_url:
            'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            link: {
            web_url: 'https://developers.kakao.com',
            mobile_web_url: 'https://developers.kakao.com',
            },
        },
        item_content: {
            profile_text: 'Kakao',
            profile_image_url: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            title_image_url: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            title_image_text: 'Cheese cake',
            title_image_category: 'Cake',
            items: [
            {
                item: 'Cake1',
                item_op: '1000 won',
            },
            {
                item: 'Cake2',
                item_op: '2000 won',
            },
            {
                item: 'Cake3',
                item_op: '3000 won',
            },
            {
                item: 'Cake4',
                item_op: '4000 won',
            },
            {
                item: 'Cake5',
                item_op: '5000 won',
            },
            ],
            sum: 'Total',
            sum_op: '15000 won',
        },
        social: {
            like_count: 100,
            comment_count: 200,
        },
        buttons: [
            {
            title: 'View on Web',
            link: {
                mobile_web_url: 'https://developers.kakao.com',
                web_url: 'https://developers.kakao.com',
            },
            },
            {
            title: 'View on App',
            link: {
                mobile_web_url: 'https://developers.kakao.com',
                web_url: 'https://developers.kakao.com',
            },
            },
        ],
        },
    },
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
 }