
import Profile from '@/components/Profile.vue'
jest.mock('@/directives/ImgLoader.js', () => {})

describe('Profile.vue', () => {
  it('has a created hook', () => {
    expect(typeof Profile.created).toBe('function')
  })
})
