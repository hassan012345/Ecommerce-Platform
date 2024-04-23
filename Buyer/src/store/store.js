import { create } from 'zustand'

export const useUserStore = create((set) => ({
  isLogin: localStorage.getItem('isLogin') === 'true' || false,
  username: localStorage.getItem('username') || '',
  email: "",
  isAlert: false,
  alertMsg: "",
  alertType: "",
  attachments: [],
  Product1: {},
  Product2: {},
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  attachmentProgress: 0,
  uploadProgressCaption: "",
  SetProduct1: (newState) => set({ Product1:newState}),
  SetProduct2: (newState) => set({ Product2:newState}),
  setAttachmentProgress: (newState) => set({ attachmentProgress:newState}),
  setUploadProgressCaption: (newState) => set({ uploadProgressCaption:newState}),
  setAttachments: (attachment) => {
    set((state) => ({
      attachments: [...state.attachments, attachment],
    }));
  },
  setCartItems: (newArr) => {
    localStorage.setItem('cartItems', JSON.stringify(newArr));
    set((state) => ({
      cartItems: newArr,
    }));
  },
  resetAttachments: () => set({ attachments: [] }),
  resetCartItems: () => set({ cartItems: [] }),

  setIsLogin: (newState) => set({ isLogin:newState}),
  setUsername: (newState) => set({ username:newState}),

}))