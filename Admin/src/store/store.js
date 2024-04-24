import { create } from 'zustand'

export const useUserStore = create((set) => ({
  isLogin: localStorage.getItem('isLogin') === 'true' || false,
  username: localStorage.getItem('username') || '',
  email: "",
  isAlert: false,
  alertMsg: "",
  alertType: "",
  attachments: [],
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  attachmentProgress: 0,
  uploadProgressCaption: "",
  setAttachmentProgress: (newState) => set({ attachmentProgress:newState}),
  setUploadProgressCaption: (newState) => set({ uploadProgressCaption:newState}),
  compareItems: [],
  setCompareItems: (newArr) => {
    localStorage.setItem('compareItems', JSON.stringify(newArr));
    set((state) => ({
      compareItems: newArr,
    }));
  },
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