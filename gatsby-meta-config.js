module.exports = {
    title: `JUNWORK.NET`,
    description: `주녁, DevNote`,
    language: `ko`, // `ko`, `en` => currently support versions for Korean and English
    siteUrl: `https://www.junwork.net`,
    ogImage: `/og-image.png`, // Path to your in the 'static' folder
    comments: {
        utterances: {
            repo: `junwork123/blog-comments`, // `zoomkoding/zoomkoding-gatsby-blog`,
            theme: `dark-blue`
        },
    },
    ga: '0', // Google Analytics Tracking ID
    author: {
        name: `최준혁`,
        bio: {
            role: `개발자`,
            description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
            thumbnail: 'logo/logo_nb.png', // Path to the image in the 'asset' folder
        },
        social: {
            github: `https://github.com/junwork123`,
            linkedIn: ``,
            email: `junwork123@gmail.com`,
        },
    },

    // metadata for About Page
    about: {
        certificates: [
            {
                date: '',
                activity: '',
            },
            {
                date: '2021.06',
                activity: 'OPIC Intermediate High',
            },
            {
                date: '2018.11',
                activity: '정보처리기사',
            },
        ],
        experiences: [
            {
                date: '',
                activity: '',
            },
            {
                date: '2016.09 ~ 2016.12',
                activity: '한국전력공사 전력연구원 / 인턴',
            },
            {
                date: '2017.01 ~ 2017.02',
                activity: '우즈베키스탄 IT 기술봉사 / 팀장',
            },
        ],
        timestamps: [
            // =====       [Timestamp Sample and Structure]      =====
            // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
            {
                date: '',
                activity: '',
                links: {
                    github: '',
                    post: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            // ========================================================
            // ========================================================
            {
                date: '2022.03 ~ 2022.08',
                activity: 'KT Shop / 개발 및 유지보수',
            },
            {
                date: '2018.03 ~ 2021.06',
                activity: '해군본부 정보체계관리단 / 개발 및 유지보수',
            },
            {
                date: '2013.03 ~ 2018.03',
                activity: '한국기술교육대학교 컴퓨터공학부 / 졸업',
            }
        ],
        projects: [
            // =====        [Project Sample and Structure]        =====
            // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
            {
                title: '',
                description: '',
                techStack: ['', ''],
                thumbnailUrl: '',
                links: {
                    post: '',
                    github: '',
                    googlePlay: '',
                    appStore: '',
                    demo: '',
                },
            },
            // ========================================================
            // ========================================================
            // {
            //     title: '개발 블로그 테마 개발',
            //     description:
            //         '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
            //     techStack: ['gatsby', 'react'],
            //     thumbnailUrl: 'blog.png',
            //     links: {
            //         post: '/gatsby-starter-zoomkoding-introduction',
            //         github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
            //         demo: 'https://www.zoomkoding.com',
            //     },
            // },
        ],
    },
};
