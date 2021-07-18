
<template>
  <div class="to" ref="aaa">
    <div>
      <div>列表哦1</div>
      <div>列表哦2</div>
      <div>列表哦3</div>
      <div>列表哦4</div>
      <div>列表哦5</div>
      <div>列表哦6</div>
      <div>列表哦7</div>
      <div>列表哦8</div>
      <div>列表哦9</div>
      <div>列表哦10</div>
      <div>列表哦11</div>
      <div>列表哦12</div>
      <div>列表哦13</div>
      <div>列表哦14</div>
      <div>列表哦15</div>
      <div>列表哦16</div>
      <div>列表哦17</div>
      <div>列表哦18</div>
      <div>列表哦19</div>
      <div>列表哦20</div>
      <div>列表哦21</div>
      <div>列表哦22</div>
      <div>列表哦23</div>
      <div>列表哦24</div>
      <div>列表哦25</div>
      <div>列表哦26</div>
      <div>列表哦27</div>
      <div>列表哦28</div>
      <div>列表哦29</div>
      <div>列表哦30</div>
      <div>列表哦31</div>
      <div>列表哦32</div>
      <div>列表哦33</div>
      <div>列表哦34</div>
      <div>列表哦35</div>
      <div>列表哦36</div>
      <div>列表哦37</div>
      <div>列表哦38</div>
      <div>列表哦39</div>
      <div>列表哦40</div>
      <div>列表哦41</div>
      <div>列表哦42</div>
      <div>列表哦43</div>
      <div>列表哦44</div>
      <div>列表哦45</div>
      <div>列表哦46</div>
      <div>列表哦47</div>
      <div>列表哦48</div>
      <div>列表哦49</div>
      <div>列表哦50</div>
      <div>列表哦51</div>
      <div>列表哦52</div>
      <div>列表哦53</div>
      <div>列表哦54</div>
      <div>列表哦55</div>
      <div>列表哦56</div>
      <div>列表哦57</div>
      <div>列表哦58</div>
      <div>列表哦59</div>
      <div>列表哦60</div>
      <div>列表哦61</div>
      <div>列表哦62</div>
      <div>列表哦63</div>
      <div>列表哦64</div>
      <div>列表哦65</div>
      <div>列表哦66</div>
      <div>列表哦67</div>
      <div>列表哦68</div>
      <div>列表哦69</div>
      <div>列表哦70</div>
      <div>列表哦71</div>
      <div>列表哦72</div>
      <div>列表哦73</div>
      <div>列表哦74</div>
      <div>列表哦75</div>
      <div>列表哦76</div>
      <div>列表哦77</div>
      <div>列表哦78</div>
      <div>列表哦79</div>
      <div>列表哦80</div>
      <div>列表哦81</div>
      <div>列表哦82</div>
      <div>列表哦83</div>
      <div>列表哦84</div>
      <div>列表哦85</div>
      <div>列表哦86</div>
      <div>列表哦87</div>
      <div>列表哦88</div>
      <div>列表哦89</div>
      <div>列表哦90</div>
      <div>列表哦91</div>
      <div>列表哦92</div>
      <div>列表哦93</div>
      <div>列表哦94</div>
      <div>列表哦95</div>
      <div>列表哦96</div>
      <div>列表哦97</div>
      <div>列表哦98</div>
      <div>列表哦99</div>
      <div>列表哦100</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name:'category',
  data() {
    return {
      cxk: null,
    }
  },
  mounted() {
    console.log(this.$refs.aaa);
    // 滚动条为左键拖拽
    this.cxk = new BScroll(this.$refs.aaa,{
      pullUpLoad: 3,
    })
    this.cxk.on('pullingUp',() => {
      console.log('上拉加载更多')
    })
  }
}
</script>

<style>
  .to{
    height: 200px;
    background-color: red;
    overflow: hidden;
  }
</style>