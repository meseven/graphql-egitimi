# Sıfırdan Her Yönüyle GraphQL ve Apollo

Udemy üzerinde yayınlanan ["Sıfırdan Her Yönüyle GraphQL ve Apollo"](https://www.udemy.com/graphql-apollo-egitimi/?couponCode=GJS24M) adlı eğitim setinde yazılan kaynak kodları barındıran repodur.

**Kurs Linki:** [Tıklayın](https://www.udemy.com/graphql-apollo-egitimi/?couponCode=GJS24M)

**Kupon Kodu:** GJS24M


![graphql apollo eğitim seti](https://mehmetseven.net/content/images/2018/11/graphql-apollo-nodejs-react-mehmet-seven.jpg)

2017 yılının son aylarından beri kendimi adadığım modern web teknolojilerini Türkçe olarak anlatma konusundaki üçüncü adımı atmanın mutluluk ve gururunu yaşıyorum.

**"Sıfırdan Her Yönüyle"** yolculuğun ilk iki adımını [Node.JS](https://goo.gl/n87XxS) ve [React](https://goo.gl/7eGkcS) kursları ile atmıştık. Şimdi sıra, bu iki teknolojiyi kullanarak `GraphQL` ve `Apollo` mevzusunu projeler geliştirerek öğrenmekte.

Kurs `Udemy` üzerinde yayınlanıyor ve toplamda 10 saatlik videolardan oluşuyor. Videolar tamamen 60fps ve 1080p kalitede hazırlandı. Ayrıca ses profesyonel mikrofon ve ses kartı ile kaydedildi.


# Neleri Konuşuyoruz?

Giriş bölümünde temel teorik bilgileri aldıktan sonra direkt proje geliştirmeye başlıyoruz.Kurs içerisinde iki adet proje geliştirdik.

Anlatılabilecek her şeyi projeler üzerinde anlattım. Böylece teknolojinin teorisine hakim olmanın yanında, onunla proje geliştirebilir hale de geliyorsunuz.


## Giriş
Bu bölümde `REST` ve `GraphQL`'in ne olduğunu, farklarını ve neden GraphQL'e geçmeniz gerektiğini öğreneceksiniz.
`Query`, `Mutation`, `Subscription` gibi GraphQL'in temel yapı taşlarını bu bölümde teorik olarak öğreneceksiniz.

####GraphQL Schema Language
GraphQL ile ilgili karşınıza çıkabilecek her türlü yazım şeklinden ve metodolojiden bahsetmeye çalışıyorum. Şema ve tip tanımlarımızı öncelikle JavaScript ile nasıl yapabileceğimizi öğreneceğiz. Sonra da aynı işlemi daha basit ve anlaşılır şekilde yapmamızı sağlayan GraphQL şema dilini öğreneceğiz. Böylelikle karşınıza çıkabilecek her türlü şema tanım şeklini kullanan kodları okuduğunuzda rahatlıkla anlamlandırabileceksiniz.


## Real World Project Structure
Projeleri sırf örnek olsun diye geliştirmiyoruz. Gerçek dünyada yapılan projelere nasıl başlanıp, nasıl ilerleniyorsa aynısını kurs üzerinde uyguluyoruz. Böylelikle kursu bitiren biri rahatlıkla yeni projeler geliştirebilir kıvama geliyor.

GraphQL ile geliştirilen projelerde, sürdürülebilir dizin ve dosya yapısının nasıl olması gerektiğini detaylı olarak anlatıyorum. Kurs içerisinde, bu başlık için başlı başına bir bölüm bulunuyor.

Aşağıdaki dizin yapısı, projemizde hazırlamış olduğumuz yapı. Her işi yapan parçalar farklı birimlere ayrılmış durumda.

![mehmetseven nodejs](https://mehmetseven.net/content/images/2018/11/graphql-project-structure-1.jpg)



## Tech Stack
Projelerimizi aşağıdaki tech stack üzerinden geliştirdik.

![mehmet seven graphql](https://mehmetseven.net/content/images/2018/11/graphql-react-nodejs-dersleri.png)




## Movie App Projesi
Pratik anlamda GraphQL'in temellerini öğrenmeye ve ilk adımlarımızı atmaya bu projede başlıyoruz.

Backend'de `Node.JS`, `Express` ve `GraphQL` kullandığımız bu projenin veritabanını `MongoDB` ve front-end tarafını da `React` ve `Apollo` ile geliştirdik.

Bu bölümde salt JavaScript ile GraphQL şemaları inşa etmeyi ve tip tanımlarını yapmayı öğreneceksiniz.

Bu bölümde genel olarak aşağıdaki kavramlara hakim olacaksınız.

- Express ile GraphQL kurulumu
- GraphQL Schema
- Root Query
- Resolver
- GraphQLID
- GraphQLList
- GraphQLNonNull
- Relations
- Custom Type
- Apollo Client
- React Apollo Module
- Refetch
- QUERY, MUTATION
- GraphiQL



-[Proje Github Reposu](https://github.com/meseven/graphql-movie-app)

-[Demo](http://graphql-movieapp.surge.sh/)

-[GraphiQL](http://54.86.4.87:5000/graphql)



### Easysnap Projesi

Bu bölümde genel olarak aşağıdaki kavramlara hakim olacaksınız.

- Apollo Server
- Subscriptions
- GraphQL Playground
- Optimistic UI
- Authentication (JWT)
- Deploy

## Authentication
GraphQL ile Token (JWT) tabanlı kimlik doğrulama işlemlerinin nasıl yapılacağını öğreneceksiniz. Gerek server, gerek client tarafında yapılması gereken işlemlere hakim olacaksınız.

## Real-time API Geliştirmek
Twitter'ın hazırladığı API'yi görmüşsünüzdür. Birisi tweet attığı anda bu tweet'i gerçek zamanlı olarak yakalayabilirsiniz. Biz de hazırladığımız [`easysnap`](https://github.com/meseven/easysnap) projesinde benzer bir yapı geliştiriyoruz. Bir kullanıcı snap attığı anda bundan haberdar oluyor ve tüm kullanıcılara gerçek zamanlı olarak gösterebiliyoruz.

Real-time API geliştirme konusunu `Subscriptions` bölümünde detaylı olarak öğreneceksiniz. Hem sunucu tarafında hem de client tarafında yapmanız gereken işlemleri öğrenmiş olacaksınız.

![gif](https://mehmetseven.net/content/images/2018/11/newest.gif)


## Optimistic UI
Sanırım Optimistic UI'ın ne olduğunu aşağıdaki gif açık bir şekilde ortaya koyuyor.

Aynı iş farklı iki yöntem. Solda bütün UI loading state ile yönetiliyor. Mesaj yazılıp "send" butonuna basıldığı anda UI üzerinde "loading" ifadesi gösteriliyor ve "loading" işlemi tamamlanana kadar herhangi bir işlem yapamıyoruz.

Ancak sağda Optimistic UI kullanılıyor. Tıpkı Facebook'un yaptığı gibi. Mesaj gönderildiği anda sadece o mesaj ile alakalı "loading" ifadesi gösteriliyor. Ve kullanıcı yeni bir işlem yapmak için beklemek zorunda kalmıyor.

Biz de kursta "easysnap" projesinde snap atarken benzer yapıyı kullanacağız.
`Apollo Client` bize bu imkanı sağlıyor. Bu süreçleri yönetmeyi hiç olmadığı kadar kolaylaştırıyor.

![](https://mehmetseven.net/content/images/2018/11/ezgif-4-85a8a29bcf9b.gif)

## Deploy
Hazırladığımız projenin deploy süreçlerinin nasıl yönetileceğini bu bölümde konuşuyoruz.

Projenin `Node + GraphQL + Apollo` backend'ini [`Heroku`](https://heroku.com) üzerine deploy ediyoruz.

`React + Apollo` frontend'ini de [`Surge.sh`](https://surge.sh/) üzerinde deploy ediyoruz.

-[Proje Github Reposu](https://github.com/meseven/easysnap)

-[Demo](http://easysnap.surge.sh/)

-[GraphQL Playground](http://54.86.4.87:4001/graphql)

### Sonuç

Kursta görüşmek üzere :)

**Kurs Linki:** [Tıklayın](https://www.udemy.com/graphql-apollo-egitimi/?couponCode=GJS24M)

**Kupon Kodu:** GJS24M