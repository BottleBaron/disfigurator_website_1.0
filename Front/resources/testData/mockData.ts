export interface Post {
    title: string;
    content: string;
    imageUrls: string[];
}

export const mockPosts: Post[] = [
    {
        title: "Webshop is live!",
        content:
            "Our webshop is now live at blabla.com. \nCheck out all new merch avaliable worldwide",
        imageUrls: [
            "https://cdn.discordapp.com/attachments/670202390124691459/1194212413327810620/Troja.png?ex=65c1fcfa&is=65af87fa&hm=5d841e9a76912adc22959c732a6b37ffab228958e43265773dbd7e69c5a830d8&",
            "https://cdn.discordapp.com/attachments/670202390124691459/1199311132503056425/image.png?ex=65c21488&is=65af9f88&hm=7037db4455b1719663343a1212ab13250bba5f9e27aaf776ded0d513dc59bead&",
        ],
    },
    {
        title: "Turning the hourglass - now live",
        content:
            "Turning the hourglass is now live on all streaming platforms. \nCheck it out!",
        imageUrls: [
            "https://cdn.discordapp.com/attachments/670202390124691459/1194212444571185212/Untitled_Artwork.png?ex=65c1fd02&is=65af8802&hm=d3b1b4b087c1e8e031e5534e7a0dbeae09b286b3ecea5865853fe664413501e4&",
        ],
    },
];
