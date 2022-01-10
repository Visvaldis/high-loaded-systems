


export function log(json) {

   console.log(JSON.stringify(json, null, "\t"));
}


export function getAuthHeaders (isAdmin) {
    if(isAdmin)
    {
        return {
            headers: {
                "Cookie": ".AspNet.Consent=yes; .AUXBLOGENGINE-96d5b379-7e1d-4dac-a6ba-1e50db561b04=9DA6BCB7235B5994E3464FE539109DA2B1295958C4FE527DA772387649102DDCBD0A837E3A4C9E4B6BAAF46B972624AF8C3F726FCA307EFD786D30DFF4EB060FD538CAAF2C060DADF3D756827228D5DF6419AF38277958962B90C562B6F389ECEB632AF84B1B96DE9503294870BE5B454C65D4680B160119627C1EF309D8921F7561C0D53D917C5731F9975B87FCCC47CC85D9D192A397C4675D1430E45F13D12CA0B0FBDCFEE56667C8D0F43511F0E227C066C8BB0F27A159057BE44037E86D18C18E0678B933BC06AF8CAF609DBF0A72BD943BF1737FAFED569E5C4C8F399F7F4F460FFB1D5ECDA4C45D7AB3CA1E2DF238EC831406235BA7A56EA48D49BDAC25422073691C917C38AD556C00D83CF35CF7B3A5F3F5F3F62D7069A4158D8FD4B0A0FFE343E0CEA7F750949420A8910377A122CE9583A1C119138483E8AE4A837ADBBF1CF5AB91992A725047894390AAD81E4D610324FEAA8998FD9765E0C708023530BB"
                }
        }
    }
    else   
     return {
        headers: {
            "Cookie": ".AspNet.Consent=yes; .AUXBLOGENGINE-96d5b379-7e1d-4dac-a6ba-1e50db561b04=2A789B2EB887A82E167E05DF826EF745BD4A97A0BAE4BFB5C6F12BD80160AFBF1C2F4320E00B9E3C8DEF2B13C765DA0B4B25CCAFDFAB77339B920740CC30BEBCBA90156913738C4B7D1B4996075F323EEC52961BD00FBA5DCC4CD20364A683A645EC51283F5EB40A1BA24F11575EF92EB0F739AD2F70D9F99CE5E5F1B522DB53A2F52FB8A4307AD3BAA946E920461CDA2DFBE692A12E08A40CE8112624F45F5ABE660391EA95236D3AC5932E1DADC0D0C6315A732B8B6A1E0B1BDFE44D8B8C33CCCFB89EF90E043A4B9D56C1DE5C37CF1E0029877A9E2BA2381320F2F6BA1D4F84797C4C98B87A9A6F4854BB909CAF7BCEDF1192EF05775857E151DF9C711B4791CB1553E1A6202AE9A642A096C0696ECF4F2CB5EF27DD6953F9103287ADD7F4C7ADA6FE76262D0114D2E08B9CB0C273FE3F3297A9CB02062E8ED21055EA8B42689C11C19B95A3909EFCE4D2BECB7DEA4A47ED4931701C8B078E3C063EB3A7E0CF492F33"
        }
    }
    
}


export function randomFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export function generateRandomPost(withDate, i, batch, time) {
    let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia ducimus corrupti sint blanditiis placeat! Ea iste repellat, recusandae totam accusamus soluta eveniet esse repudiandae a inventore ratione voluptate eos labore repellendus provident ducimus consequuntur quibusdam sit excepturi nihil harum alias ipsum culpa. Excepturi asperiores et maxime. Modi nemo est, minima hic distinctio maxime, architecto voluptatum quisquam eius, cupiditate ab aliquam ducimus labore. Placeat commodi molestias doloremque suscipit veritatis possimus, explicabo rerum temporibus, fugit iusto fuga reprehenderit optio dignissimos accusantium aliquid ratione numquam dolorem? Debitis impedit eos facere, odit sed assumenda iure accusantium excepturi nobis earum id, harum velit saepe! Debitis ullam sapiente in harum sed blanditiis voluptatibus quas vel numquam error eligendi nam quae consequatur porro necessitatibus cum eos reprehenderit facilis nesciunt, fuga asperiores optio non repellendus doloremque. Minima sequi, et quam molestiae voluptate consectetur ipsam. Est assumenda voluptate nobis nemo voluptatibus deserunt, consequuntur praesentium alias sit impedit veniam accusamus totam aliquam sunt repudiandae, veritatis laborum vitae ipsum. Corrupti amet quod hic repellendus laudantium soluta maiores beatae pariatur, porro illo accusantium? Recusandae, cupiditate excepturi. Recusandae, atque. Minima odio inventore nam a accusantium eum labore! Necessitatibus at qui explicabo quis similique illo eius! Velit ducimus aliquam harum beatae non accusamus odit alias! Ut accusamus voluptates pariatur obcaecati repellat, rerum deserunt labore atque quod id iusto amet numquam facere temporibus cupiditate, vel sed repudiandae quis a perspiciatis sapiente nihil, odit odio aliquid! Corrupti ipsam at deleniti repellendus obcaecati sapiente rem dolores incidunt sed, eligendi labore animi laboriosam ullam itaque possimus voluptatem molestiae aut illo minima minus voluptatibus? Velit quisquam aperiam explicabo distinctio ea, sed enim corrupti ducimus ut aut laborum ab placeat tempore dolore ratione voluptate ipsa consequuntur rerum veritatis dolorum corporis impedit facere! At reprehenderit modi, alias rerum temporibus blanditiis velit aperiam quidem? Ab qui consectetur, necessitatibus deleniti numquam ullam nihil. Sunt eum nam dicta blanditiis sed inventore hic ex harum! Odit pariatur recusandae enim amet, sapiente vitae rem nobis atque quasi voluptatibus facere consequatur omnis nulla maxime voluptates nisi ipsa autem accusamus nesciunt voluptas? Odit optio adipisci praesentium accusamus ipsa? Molestias temporibus quia molestiae reiciendis aliquam facilis nam aspernatur doloremque, consequuntur iste perspiciatis, excepturi doloribus velit incidunt accusamus aut quaerat voluptates quod. Laudantium molestiae quaerat amet mollitia exercitationem voluptatem consectetur necessitatibus! Nihil, ullam voluptate ratione labore enim corrupti repellendus exercitationem, laudantium natus corporis in eaque ipsam cum ab ducimus, minus molestias. Omnis iusto tempore nesciunt pariatur impedit, facere aspernatur consectetur cum, dolorum labore nostrum. Maxime voluptas officia vel laborum accusantium minima eligendi sunt odio, aspernatur corrupti, architecto mollitia, amet sequi enim ipsam suscipit quaerat aperiam minus labore! Eveniet quia harum laudantium accusantium illum sunt, at quibusdam velit nihil suscipit, enim doloribus nam minima nostrum. In similique sapiente voluptatem repellendus odit dolor laborum ratione blanditiis quam mollitia ipsam rerum deleniti at minus, sed corporis, aut commodi nemo illum perspiciatis ex sunt, cumque culpa unde. Distinctio placeat, laboriosam iste tempora eos rerum magnam veritatis amet, excepturi porro quod? Ipsum, eos. Recusandae inventore laborum necessitatibus, quas nulla, quia, totam consequatur velit possimus est in nihil explicabo exercitationem dicta. Facilis deserunt magni omnis? Voluptate repellendus non sapiente recusandae praesentium voluptatum voluptatibus, iure beatae, a, assumenda quos cupiditate at nisi. Temporibus aut quod, porro quas, quibusdam commodi veritatis illo, laudantium optio officiis ea. Fuga expedita in unde tempora non reprehenderit harum labore corporis? Quibusdam sunt iusto vitae itaque similique laudantium, reprehenderit totam a perferendis doloremque ab voluptates non consequatur illo architecto ut. Maxime quo dolores eius architecto ipsum molestiae libero earum est ex harum! Sit architecto repellendus aliquid tempore deleniti natus fugiat quasi et corrupti dolor cum mollitia asperiores aperiam, deserunt impedit dolorem ea quas magni quia qui fuga dignissimos nostrum magnam nam. Eveniet aspernatur explicabo, sapiente amet cumque unde magni quos? Magni non assumenda sunt optio maiores ipsam mollitia exercitationem, sit, sapiente consequuntur aliquid repellendus, blanditiis dolore nostrum explicabo. Veniam modi tenetur nesciunt ratione possimus molestias tempore, vel fugiat officiis exercitationem dolorem. Quas dolores, autem repellat ab aspernatur praesentium sint esse. Adipisci a vitae sint maiores culpa itaque architecto iure, aut vero, animi quisquam? Rerum at excepturi architecto dolores molestiae iusto modi, aperiam distinctio eligendi cupiditate libero error maiores aliquam quod dignissimos possimus eum deleniti earum voluptate impedit odit doloribus omnis deserunt id? Ut corporis sit corrupti quis voluptatem tempore nihil suscipit odio dolorem magnam quisquam minus enim, ipsa nam illum veritatis velit illo doloremque error perspiciatis officia! Vel amet incidunt sit hic soluta, voluptates neque quia omnis sint eveniet molestiae impedit velit magni optio reiciendis magnam nobis excepturi officia quidem blanditiis libero. Enim cumque minus, ex officiis omnis quasi, rem eius, adipisci blanditiis quis ipsum quaerat dolorum? Quisquam laborum aliquid sit, tempore animi dicta provident nisi possimus explicabo dolore exercitationem amet itaque, cupiditate ad, et assumenda perferendis aliquam mollitia ab est! Cupiditate praesentium qui vitae sit asperiores odio placeat molestiae consectetur obcaecati dolorum sunt ea doloribus illum ex laborum deserunt quisquam eius, rem distinctio numquam fugiat quos pariatur eos! Quod porro tempora praesentium, laborum a aliquid quisquam, at, esse eos veniam dolor. Deserunt rerum libero dolores quia sapiente fugiat dicta quo pariatur explicabo minus reprehenderit repellendus voluptatem, accusantium voluptate ab, ullam saepe ex possimus et incidunt aliquam eaque corporis! Sit, ut at facere, sed debitis officia totam, dolorem iste minus velit illo? Totam sequi quibusdam animi non fuga mollitia hic provident quaerat alias unde officia ab laborum quam assumenda aut itaque asperiores minima consectetur, tenetur aperiam iusto. Odio eligendi ea facere nisi laudantium aliquid illo quo, deleniti quod necessitatibus dolore sunt ullam reiciendis vitae? Ut, possimus ipsa quae doloribus magnam officiis minus ducimus culpa totam? Accusantium ipsam dolorum temporibus assumenda ad. Sunt nulla sapiente vitae beatae veniam ipsa, quas inventore laboriosam illo ut, qui quisquam harum molestiae minima quo cumque maxime praesentium? Omnis doloremque rem temporibus similique expedita iure provident repudiandae id saepe odit facere architecto laudantium fugit beatae nesciunt, voluptatem fugiat! Delectus recusandae nostrum a quibusdam incidunt? Provident aperiam laborum nulla, quisquam voluptatem perspiciatis asperiores molestias modi. Cupiditate voluptate quaerat hic eius modi. Quia culpa, harum quis ipsam nisi magni a?"
    let postText = lorem.substring(0, randomFromInterval(50, 1000));
    let dates = getParticularDates();
    let title =  `Post  ${i+1} of ${batch} || ${time}`;
    let formData = {
        Id: "",
        Title: title,
        Author: "editor",
        Content: postText,
        DateCreated: withDate? dates[randomFromInterval(0, dates.length-1)]: randomDate(),
        Slug: camelize(title),
        Categories: [],
        Tags: [],
        Comments: "",
        HasCommentsEnabled: true,
        IsPublished: true
    };

    return formData;

}

function randomDate() {
    let start = new Date(2020, 0, 1);
    let end =  new Date();
    return  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')
    .substring(0,16);
    
  }

export function getParticularDates(){
    let dates = [
        "2021-01-11 11:11",
        "2021-02-11 11:11",
        "2021-03-11 11:11",
        "2021-04-11 11:11",
        "2021-05-11 11:11",
        "2021-06-11 11:11",
        "2021-07-11 11:11",
        "2021-08-11 11:11",
        "2021-09-11 11:11",
        "2021-10-11 11:11",
        "2021-11-11 11:11",
        "2021-12-11 11:11",
    ];
    return dates;
}
 
export function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '')
    .replace('||','_')
    .replace(':','_')
    ;
  }