class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # l = [1, 2, 3, 4, 5]
        # t = 9

        dic={}

        for i in range(len(nums)):
            sub = target - nums[i]
        if sub in dic:
            return (dic[sub], i+1)
        else:
            dic[nums[i]] = i+1
        return (-1,-1)

