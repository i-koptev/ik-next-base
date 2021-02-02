export default {
    data: {
        menus: {
            topbarMenu: {
                menuItems: {
                    nodes: [
                        {
                            key: "117",
                            parentId: null,
                            title: "contacts",
                            url: "/contacts",
                        },
                        {
                            key: "12",
                            parentId: null,
                            title: "about",
                            url: "/about",
                        },
                        {
                            key: "13",
                            parentId: null,
                            title: "services",
                            url: "/services",
                        },

                        {
                            key: "122",
                            parentId: "13",
                            title: "design",
                            url: "/design",
                        },
                        {
                            key: "123",
                            parentId: "13",
                            title: "development",
                            url: "/development",
                        },
                        {
                            key: "121",
                            parentId: "13",
                            title: "programming",
                            url: "/programming",
                        },
                        {
                            key: "121",
                            parentId: "12",
                            title: "seo",
                            url: "/seo",
                        },
                    ],
                },
            },
            sidebarMenu: {
                menuItems: {
                    nodes: [
                        {
                            key: "117",
                            parentId: null,
                            url: "/contacts",
                            title: {
                                ru: "Контакты",
                                en: "Contacts",
                                lv: "Kontakti",
                            },
                        },

                        {
                            key: "13",
                            parentId: null,
                            url: "/services",
                            title: {
                                ru: "Услуги",
                                en: "Services",
                                lv: "Pakālpojumi",
                            },
                        },

                        {
                            key: "122",
                            parentId: "13",
                            url: "/design",
                            title: {
                                ru: "Дизайн",
                                en: "Design",
                                lv: "Dizains",
                            },
                        },
                        {
                            key: "123",
                            parentId: "13",
                            url: "/development",
                            title: {
                                ru: "Разработка",
                                en: "Development",
                                lv: "Izstrāde",
                            },
                        },
                        {
                            key: "124",
                            parentId: "123",
                            url: "/programming",
                            title: {
                                ru: "Программирование",
                                en: "Programming",
                                lv: "Progremēšana",
                            },
                        },
                        {
                            key: "125",
                            parentId: "124",
                            url: "/seo",
                            title: {
                                ru: "Поисковая оптимизация",
                                en: "Search Engine Optimization",
                                lv: "Meklešanu optimizēšana",
                            },
                        },
                        {
                            key: "12",
                            parentId: null,
                            url: "/about",
                            title: {
                                ru: "О нас",
                                en: "About Us",
                                lv: "Par mums",
                            },
                        },
                    ],
                },
            },
        },
    },
}
