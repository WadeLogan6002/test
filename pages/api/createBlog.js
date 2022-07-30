const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyqq8Ntn5atCjPzP" }).base(
  "appAASadxF8rghEQx"
);

export default async (req, res) => {
  if (req.method === "POST") {
    base("Table 1").create(
      [
        {
          fields: {
            blog_title: "blog title",
            blog_des:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliqua...",
            blog_card_img: "https://picsum.photos/560/315",
            blog_views: 0,
            blog_author: "Sauganthika",
            blog_read_time: 0,
            blog_para1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliqua...",
            blog_para2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliqua...",
            blog_para3:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliqua...",
            blog_para4:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliqua...",
            blog_para5:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliqua...",
            blog_para6:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliqua...",
            blog_para7:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliqua...",
            blog_img1: "https://picsum.photos/560/315",
            blog_img3: "https://picsum.photos/560/315",
            blog_img5: "https://picsum.photos/560/315",
            blog_img7: "https://picsum.photos/560/315",
            blog_img2: "https://picsum.photos/560/315",
            blog_img4: "https://picsum.photos/560/315",
            blog_img6: "https://picsum.photos/560/315",
          },
        },
      ],
      function (err, records) {
        if (err) {
          res.status(400).json(err);
          return;
        }
      }
    );
  }
};
