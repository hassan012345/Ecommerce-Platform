import { create } from 'zustand'

export const useUserStore = create((set) => ({
  isLogin: false,
  username: "No",
  email: "",
  isAlert: false,
  alertMsg: "",
  alertType: "",
  attachments: [],
  cartItems: [],
  attachmentProgress: 0,
  uploadProgressCaption: "",
  setAttachmentProgress: (newState) => set({ attachmentProgress:newState}),
  setUploadProgressCaption: (newState) => set({ uploadProgressCaption:newState}),
  setAttachments: (attachment) => {
    set((state) => ({
      attachments: [...state.attachments, attachment],
    }));
  },
  setCartItems: (newArr) => {
    set((state) => ({
      cartItems: newArr,
    }));
  },
  resetAttachments: () => set({ attachments: [] }),
  resetCartItems: () => set({ cartItems: [] }),

  setIsLogin: (newState) => set({ isLogin:newState}),
  setUsername: (newState) => set({ username:newState}),

}))