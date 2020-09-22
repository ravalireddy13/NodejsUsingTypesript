import * as express from 'express'
import cors from 'cors'
import Post from './models/posts'

class Router {

    constructor(server: express.Express) {
        const router = express.Router()

        const posts: Post[] = [
            {
                "UserId": 1,
                "id": 1,
                "Title": "to provide or to reject the blind are welcome option to find",
                "Body": "And it takes \ nsuscipit follow accepted lightly with \ nreprehenderit discomfort may be the entire \ nnostrum of the things that happens is that they are extremely"
            },
            {
                "UserId": 1,
                "id": 2,
                "Title": "that was",
                "Body": "is existed at the time of life \ 'Blessed are the pain of her pains, nor condemn nseq they are nothing \ nfugiat or not at all the blandishments of pleasure, and the discomfort may rejecting some \ nWho, not being due, we may be able to open the man who did not, but there is no"
            },
            {
                "UserId": 1,
                "id": 3,
                "Title": "those who reject the troubles they exercise that is either",
                "Body": "and on the right, but \ nvoluptatis blinded to the election or \ nvoluptatis pains or denouncing any resultant \ nmolestiae on his work and wants to hate or"
            },
            {
                "UserId": 1,
                "id": 4,
                "Title": "it will be blinded",
                "Body": "rejects any and often experience pleasure \ mānsit lot of things to take to provide fault \ nquir here the opportunity to do the right bound pain \ nFor the pleasure of the outdoor"
            },
            {
                "UserId": 1,
                "id": 5,
                "Title": "do you hate",
                "Body": "I look for things, but rejected \ nal or to avoid it, but it is \ nvoluptatis all the pleasures of what we can \ nest bound or no pain"
            },
            {
                "UserId": 1,
                "id": 6,
                "Title": "great pain to open for them",
                "Body": "in order to follow the rejects of the body, provide in any one of these there is nothing \ nmollitia us dare to give annoyance \ nperspiciatis of denouncing, and the things which I condemn no one from the \ nvoluptatis The sorrows of pain and discomfort he wishes to"
            },
            {
                "UserId": 1,
                "id": 7,
                "Title": "large and easy",
                "Body": "let it be shown some of the pain of life, please \ in which a man who has no one, either, for who is often nmagni \ nQuidam repel excepturi that, because I \ nsunt do who comes after them, but the things which they call"
            },
            {
                "UserId": 1,
                "id": 8,
                "Title": "pain is the pain",
                "Body": "I will open the sorrow which was worthy of him, \ nfacilis some cases we may be able, when they are to be in character, they receive the \ nquaerat welcome the ancestors of the great \ nips so that the advantage of this kind of pleasure, or the pain of life"
            },
            {
                "UserId": 1,
                "id": 9,
                "Title": "do the right pain all the time and denouncing",
                "Body": "do not know the right of the main pain \ Nenior for the \ nvenire will be more than either of us \ net or which provide pleasure or the pleasure"
            },
            {
                "UserId": 1,
                "id": 10,
                "Title": "That option is troublesome because it",
                "Body": "I like the armed services or the big \ ndoloribus who reject \ nVero but it \ nquo I denounce it, but the truth mistake"
            },
            {
                "UserId": 2,
                "id": 11,
                "Title": "And it is because they gave",
                "Body": "selected for rejecting annoying blind does not happen that small pleasure \ naccusamus for him to be happy, \ river or pleasures that are beneficial to the incident \ nut of convenience"
            },
            {
                "UserId": 2,
                "id": 12,
                "Title": "in some pain due to hate",
                "Body": "So it is either a great \ npraesentium because they hate them, and the pleasure and \ blinded in wisdom that is important because it is a pleasure \ nincidunt that there is no difference hate"
            },
            {
                "UserId": 2,
                "id": 13,
                "Title": "pleasure in pain and often the resilience of mind",
                "Body": "Or could it be beneficial to the softness of pleasure and pain \ niste corrupted by rejecting some of the pleasure \ mānsit When choosing snacks and small \ nperferendis accepted enhanced further assumed that the builder"
            },
            {
                "UserId": 2,
                "id": 14,
                "Title": "The option of choosing a pleasure",
                "Body": "Flight denounce pain and suffering that pleasure \ nnon pain, nor do \ nad pain and discomfort happy \ to be used either by the entire"
            },
            {
                "UserId": 2,
                "id": 15,
                "Title": "I will be times",
                "Body": "fault which is pleasing \ small river services discomfort and pain for preventing rejected \ nvoluptas accepted any selected \ nofficiis avoid these decisions"
            },
            {
                "UserId": 2,
                "id": 16,
                "Title": "undertakes to explain the pain she wants an intense hatred",
                "Body": "replies except for the open or \ nasperiores greater pleasure for them to sleep \ nvoluptatis anyone in any other because it is \ nconsequatur great resilience denounce the only pleasure called"
            },
            {
                "UserId": 2,
                "id": 17,
                "Title": "flies pleasure, but the pleasure of hardship provision",
                "Body": "born of them or hates them, and the pleasure of \ naspernatur any discomfort in flight, \ ndes reason to part them, \ nWho, one would choose to do nothing in such a way that by which the nature of"
            },
            {
                "UserId": 2,
                "id": 18,
                "Title": "So, the times of discomfort and pleasure",
                "Body": "Who will get the \ nlabor not attain full consumer \ nut and is rationally \ nest or pleasure due to the large"
            },
            {
                "UserId": 2,
                "id": 19,
                "Title": "experience pleasing in that it rejects",
                "Body": "him who has the desire to betake himself to be a great \ nea but 'or' everybody \ nvenire the consequences of the ancestors, and any \ nadipisci in the explication thereof, by what it is the pleasure of those whom"
            },
            {
                "UserId": 2,
                "id": 20,
                "Title": "but takes pains to provide",
                "Body": "that result from any draw a lot like \ nsuscipit on the film \ apt truth offices of exercise or sleep, or the needs of the entire \ nomnibus affairs when they manage to explain"
            }

        ]


        //get all posts
        router.get('/posts', cors(), (req: express.Request, res: express.Response) => {
            res.send(posts)
        })



        //get post by id
        router.get('/posts/:id', cors(), (req: express.Request, res: express.Response) => {
             
            if (!!posts[parseInt(req.params.id)]) {
                res.json({
                    post: posts[parseInt(req.params.id)]
                })
            } else {
                res.status(404).send(JSON.stringify({ "error": "no such post" }));
            }
        })



        router.options('*', cors());

        server.use('/', router)
    }
}

export default Router;