import React from "react";
import "./style.scss";
import img from "../../../assets/images/rektorTabrigi.png";

const RektorTabrigi = () => {
  return (
    <div className="rektortabrigi">
      <div className="title-wrap">
        <div className="title-little">Bosh sahifa/Rektor tabrigi</div>
        <div className="title">Rektor Tabrigi</div>
      </div>
      <div className="line"></div>

      <div className="img-wrap">
        <img src={img} alt="" />
      </div>
      <div className="text-wrap">
        <div className="text">
          Har bir inson uchun o’zınıng bo’lajak kasbi va unga tayyorlaydigan
          oliy o’quv yurtini tanlashi hayotida muhim davr hisoblanadi.
          Mutahassisning kasbiy rivojlanishi, lavozimi bo’yicha ko’tarilishi va
          o’z-o’zini namoyon qilishi oliy ta’lim muassasasida olgan bilim
          sifatiga bog’liq. Islom Karimov nomidagi Toshkent davlat texnika
          universiteti (TDTU) O’zbekistonning mashhur va nufuzli oliy o’quv
          yurtlaridan biri hisoblanadi. TDTU O’zbekiston texnika oliy o’quv
          yurtlari orasida yetakchi o’rinni egallaydi. Bizning universitetimiz
          tashkil etilganidan buyon deyarli 100 yil o’tdı. Ammo oliy o’quv
          yurtimiz tiklanish va ilg’or innovatsion rivojlanishning shiddatli
          davrini bosib o’tdi. Universitetda yuqori darajali ta’lim sifati
          ta’minlanib, zamonaviy ta’lim texnologiyalari muvaffaqiyatli
          shakllantirılib, o’quv jarayoniga tatbiq etilmoqda. TDTU tuzilmasida 3
          ta filial, 8 ta fakultet, 60 ta kafedra, O’zbek-Yapon yoshlar
          innovatsiya markazi, “Fan va taraqqiyot” davlat unitar korxonasi
          mavjud.
        </div>
        <div className="text">
          TDTU talabasi bo’lish fahrli va mas’uliyatlidır. Bizning oliy o’quv
          yurtımizda har bir talaba uchun katta imkoniyatlar yaratilgan. Ularga
          universitetda ishlab chiqilgan o‘quv dasturlari asosida bilim
          beriladi, tajribali olimlar va professor-o’qituvchilar ilmiy
          tadqiqotlarni olib borishlarida ilmiy rahbarlik qiladilar, iqtidorli
          talabalar ilmiy loyihalarda ishtirok etadilar va yaratgan ixtirolarini
          amaliyotga tatbiq etadilar. Innovatsiya va axborot texnologiyalari
          davrida universitetda mutaxassislarning yangi avlodini tayyorlash
          yo’lga qo’yildı. Bitiruvchilar O’zbekiston Respublikasi, Markaziy
          Osiyo mintaqasi va dunyo hamjamiyati mamlakatlarining ijtimoiy-madaniy
          hayotiga moslashishga imkon beradigan umuminsoniy hamda kasbiy mahorat
          va ilg’or dunyoqarashni shakllantirmoqda.
        </div>
        <div className="text">
          TDTU bitıruvchilari o’zining yuqori kasbiy tayyorgarligi, mehnat
          bozorida raqobatbardoshligida, reytingıni oshiradigan ishlab chiqarish
          masalalariga nostandart yondashish qobiliyati bilan ajralib turadi.
          Bizning bitiruvchilarimız yirık ishlab chiqarish korxonalarida, davlat
          va tijorat tuzilmalarida, xalqaro kompaniyalar, ta’lim muassasalari va
          ilmiy-tadqiqot institutlarida faoliyat ko’rsatmoqdalar.
        </div>
        <div className="text">
          TDTUda talabalarning nafaqat kasbiy tayyorgarligi, balki shaxsning
          barkamol rivojlanishi uchun barcha sharoitlar yaratilgan, ularning
          huquqiy ong va jamiyatda huquqiy madaniyatini oshirish hamda
          madaniyat, sport va jamiyat hayotida o’zlarining iqtidorlari,
          shuningdek qobiliyatlarini namoyon qilishga yo’naltirilgan
          ma’naviy-ma’rifiy faoliyatga katta e’tıbor qaratilmoqda. Yorqin
          voqealar, ilmiy ixtirolar va yangi qiziqarli tanishuvlar – bularning
          barchasi bizning universitetimizda mavjud.
        </div>
      </div>
    </div>
  );
};

export default RektorTabrigi;
