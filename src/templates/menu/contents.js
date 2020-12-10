import React from "react"
import {
    Home,
    Face,
    MailOutline,
    LaptopChromebook,
    MenuBook,
    Code,
    Star,
    ViewModule,
} from '@material-ui/icons';
// iconはここでインポートしておくと使える

/**
 * MENU
 * メニュー関連
 */


export const contents = [
    {
        title: 'Home',
        icon: < Home className="icon" />,
        path: "",
        sub_menu: [

        ],
    },
    {
        title: 'About',
        icon: <Face className="icon" />,
        path: "contents/about",
    },
    {
        title: 'Business',
        icon: <LaptopChromebook className="icon" />,
        path: "contents/business",
    },
    {
        title: 'Contact',
        icon: <MailOutline className="icon" />,
        path: "contents/contact",
    },
    {
        title: 'Document',
        icon: <MenuBook className="icon" />,
        path: "contents/document",
    },
    {
        title: 'Experiment',
        icon: <Code className="icon" />,
        path: "contents/experiment",
    },
    {
        title: 'Favorite',
        icon: <Star className="icon" />,
        path: "contents/favorite",
    },
    {
        title: 'Gallery',
        icon: <ViewModule className="icon" />,
        path: "contents/gallery",
    },
]
