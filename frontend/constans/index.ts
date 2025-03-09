export const LoginActionSelectors = [
    {
        title:"Trivemart",
        description: "I want to explore and purchase items from the marketplace",
        icon: "/Trivemart1.svg",
        link: "login/trivemart",
    },

    {
        title:"Trivestore",
        description: "I want to login or register as a seller on the marketplace",
        icon: "Trivestore.svg",
        link: "login/trivestore",
    },

    {
        title:"Trivexpress",
        description: "I want to login or register as a delivery agent/company",
        icon: "Trivexpress.svg",
        link: "login/trivexpress",
    }
]

export const LoginImageSideData = [
    {
      type: "Trivemart",
      image: "/login-trivemart.svg",
      card: {
          header: "Yay! 🎉",
        icon: "/shopping-card.svg",
        amount: "#6,500",

      },

      description:
        "A global marketplace that serves every of your needs. Start shopping seamlessly today from the comfort of your home.",
    },
    {
      type: "Trivestore",
      image: "/png/TrivestoreLogin1.png",
      card: {
          header: "Total Order",
        icon: "/shopping-card.svg",
        amount: "1,256",
      },

      description:
        "Own and run a profitable online store and start selling from the comfort of your room",
    },
    {
      type: "Trivexpress",
      image: "/png/trivexpresslogin2.png",
      card: {
          header: "Fulfilled Orders",
        icon: "/shopping-card.svg",
        amount: "256",
      },

      description:
        "We provide efficient logistics services to get items delivered within 24 hours. ",
    },
  ];