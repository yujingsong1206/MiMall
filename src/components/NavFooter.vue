<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="" target="_blank">赞助商1</a><span>|</span>
            <a href="" target="_blank">赞助商2</a><span>|</span>
            <a href="" target="_blank">赞助商3</a><span>|</span>
            <a href="" target="_blank">赞助商4</a><span>|</span>
            <a href="" target="_blank">赞助商5</a>
        </div>
        <div class="copyright">Copyright ©2020 <span class="domain">http://www.yujsong.cn/</span> All Rights Reserved | 滇ICP备19003414号</div>
    </div>
</template>
<script>
    export default{
        name:'nav-footer',
    }
</script>
<style lang="scss">
    .footer{
        height: 234px;
        border-top: 4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright{
            .domain{
                color: #ff6600;
            }
        }
    }
</style>