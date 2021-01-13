export default {
    data: {
        menuItems: {
            nodes: [
                {
                    key: "11",
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
                    title: "programming",
                    url: "/programming",
                },
            ],
        },
    },
}
