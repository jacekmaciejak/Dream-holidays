import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpg";
import room3 from "./images/details-3.jpg";
import room4 from "./images/details-4.jpg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";

export default [
    {
        sys: {
            id: '1'
        },
        fields: {
            title: "Wakacje marzeń",
            featured: true,
            address: "wakacje-marzeń",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptate soluta sequi dolores unde amet perferendis. Ipsum temporibus assumenda porro voluptatem repellat in quaerat fugit soluta beatae. Consequuntur dolores officia velit quidem recusandae itaque ullam corrupti.",
            extras: [
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room4
                        }
                    }
                }
            ]
        },

    }, {
        sys: {
            id: '2'
        },
        fields: {
            title: "Gdzie wyjechać?",
            featured: true,
            address: "gdzie-wyjechać",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptate soluta sequi dolores unde amet perferendis. Ipsum temporibus assumenda porro voluptatem repellat in quaerat fugit soluta beatae. Consequuntur dolores officia velit quidem recusandae itaque ullam corrupti."
            , extras: [
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room4
                        }
                    }
                }
            ]
        },

    }, {
        sys: {
            id: '3'
        },
        fields: {
            title: "Kiedy wyjechać?",
            featured: true,
            address: "kiedy-wyjechać",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptate soluta sequi dolores unde amet perferendis. Ipsum temporibus assumenda porro voluptatem repellat in quaerat fugit soluta beatae. Consequuntur dolores officia velit quidem recusandae itaque ullam corrupti. "
            , extras: [
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
                "Lorem, ipsum.",
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: img3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: room4
                        }
                    }
                }
            ]
        },

    }
]