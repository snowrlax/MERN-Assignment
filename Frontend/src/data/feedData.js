const feed = [
    {
        id: 1,
        imageSrc: "https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkTMclGesAM~x8asHfhKYVctLf9OOufe~VgHN7L-f0pBk7WNVdQX4eTTGrP11oWCxMoo2pBTFknKWX1A~y~mk1sTUmLuCzDBnF20J45AHRdEdl~AKgcEgERcNbdn0tmXWN0cVvEA7CIDBg2vlc-~UYREaRxaZ-yqkxdF1~EYj-0ijsMFMVfa5ao1-pqeD85bmaNGVHUDoV03WchMBaI23UuWpM~qMRZrn7GAJ0AKL9YuqiONYwRCdFvkhXRV9PADval3ZCxRzd6CgsR0AQWU0Ns6ud1PQhaoIkJ3UrwhngdYl-eFV5vv9IHWIxL6WB1Fy9N5gbsiN66bt2FigGzTNw__",
        postType: "✍️ Article",
        title: "What if famous brands had regular fonts? Meet RegulaBrands!",
        description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        userImg: "https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inrjLLSVSIUZw6p2~Ag9a3muPfI-AdO~yGgT5A4EDRLRr-b3cX6P0eQGVqZNkQBq1e4pB9S6S9xH-rAqwlLxlHqKGu2TsQ8XntI4dQb3We1PGmo3yBVn~R5a9mLqd-Lz66Q1d7MGuB1FEVH1EAoLrew-Vd8HEwj2sH6XOHO6u-K9BdHAW-PNmlTYRPhcfaWSP~U-6w7caSJer200JDjYnB6cLZZX4AJNEuj2zT9xEfQuyL3MDSPfhS4E22WcNE-EnRwmDo9DzUmnL3kDJ-DzgJhhuAtcdoco9Zm-unKJH19Ns891S4qiNT1NDl6RjWAPKxwharDpSldEIK5EtOITWg__",
        userName: "Sarthak Kamra",
        views: "1.4K"
    }, {
        id: 2,
        imageSrc: "https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfVU0f31Ny91ctpadqlgvRGyDcDq1WyC4smR08JBYvstpi-E5WGGhQoeJf-rP1Tn1aDaAUmsLE4tPcHqO-454-0GLr6zHSgvwAVvTHoJWw-86jDwgHQIioWnLwQ~nIMw~l6HPciqq60WrhAxzkt-VKSfz1qqmDuiq2io2eJz3GKaIIg9DqwOdbGrZOs~~1Y~54Jao7epBhiNJisMEvOXBCdTLk0~ZKUtcSKCXk3HVWBv~eYAU0OaJaH9g-YtZd3H4zDfGy7Y9XgotLtpdsa9nSws70s95anqyNrxW9qWBbCO2lcMG3OJBoghHy4swX3~HiSMQ0pfWBc~7ctOaLKt0Q__",
        postType: "🔬️ Education",
        title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        description: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
        userImg: "https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgufcVI56dfouV16Rgo21wTTYQ0x4yKD7jeQ8EX2MGVOqgqbgZjegaH5lQbQBI3lDiEquC69LFY3awL53LQn2L4-lDHC-qCk5xsGfBNh3s6u2VJtgX~HmjVSIz36oQmPFJFOPMUJJaHCwL17nknr14zpKyn5us1ctm54aaMii2L5q1evAW7DDhpWwZTE5BVixLC9CTNIfxJwJwYbAoq8KFHOdMmyCltDHEsqVksAiSy8-zbY3f5pgQXYlb~qXlh7mabsRrwgXY99CUyYQULHyPxlZm4hc8EhDbkpKD6syYGYZ7lL6BhvnrV~biKgqUWk1uoyQyinG2qJu19MySb7wg__",
        userName: "Sarah West",
        views: "1.4K"
    }, {
        id: 3,
        imageSrc: "https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9wQOexENrog7-LiDtCHy58V9TWhCR0Vwwrk1Xbkls3vltSFP4QGLEWu0qBijEZoGj33yMqbcwun1fgvIdhQY3~jU685C3ABgDBJxG92ozITNmkRuLUXGqi4X7UDhfn-egDVDaT062DlogXH2eiH5CbcqtI-b0CBAUdHNmQcopSRq2ltOVa56gqMOZikUTLOI3-D3EQ0WWUCDJPRXKnmAfpoHr-Wcn1nfBuW9u1HaxbSnwlXGlDOjwpyFXrU32YaIlxIqI8iZf2-ASDWYr4lg4rsARPEFt8SrWUI7ga2qZsHh04oeW2AVme0VzorSHnyXxjNuow86rojZWUcSSQpdg__",
        postType: "🗓️ Meetup",
        title: "Finance & Investment Elite Social Mixer @Lujiazui",
        subtitle: "Fri, 12 Oct, 2018",
        location: "Ahmedabad, India",
        buttonText: "Visit Website",
        userImg: "https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inrjLLSVSIUZw6p2~Ag9a3muPfI-AdO~yGgT5A4EDRLRr-b3cX6P0eQGVqZNkQBq1e4pB9S6S9xH-rAqwlLxlHqKGu2TsQ8XntI4dQb3We1PGmo3yBVn~R5a9mLqd-Lz66Q1d7MGuB1FEVH1EAoLrew-Vd8HEwj2sH6XOHO6u-K9BdHAW-PNmlTYRPhcfaWSP~U-6w7caSJer200JDjYnB6cLZZX4AJNEuj2zT9xEfQuyL3MDSPfhS4E22WcNE-EnRwmDo9DzUmnL3kDJ-DzgJhhuAtcdoco9Zm-unKJH19Ns891S4qiNT1NDl6RjWAPKxwharDpSldEIK5EtOITWg__",
        userName: "Ronal Jones",
        views: "1.4K"
    }, {
        id: 4,
        title: "Software Developer",
        postType: "💼️ Job",
        subtitle: "Innovaccer Analytics Private Ltd.",
        location: "Noida, India",
        buttonText: "Apply on Timesjobs",
        userImg: "https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4UULEcCpc67Y7b1nU4-3BFPzJfozFrL66ZoHMUwtbqBsvPJtfzzWzK3Ez6QwVkVpCzfP6ZgqB10UowDZXHirbpMNR-RgwkUFSnoLfVTJsLkSWexsUyOsprN-vC64f0x5yP4morFAbXSyQuVYOKZtSMk-j5HGaE5qIepssev2cYA61qsD4xhxahigaxmcqDfOQKZE04iC-3kKv41ydPykNd2VxaKIo6nSn7-uQ28ECXY5FwhOgJ7BO31kklglEGrQmWQ0J-iGlcQuWBnHjz2AWYEFWYQ2VPphNKkFsA3ScxXZlmIzICEHiZibRPTfEhS35wSy~a9KPo6CRABA5xcAg__",
        userName: "Joseph Gray",
        views: "1.4K"
    }

]

export default feed