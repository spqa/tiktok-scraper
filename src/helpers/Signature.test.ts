import { signv2 } from './Signature';

describe('Signature', () => {
    it('should generate signature', () => {
        return signv2(
            'https://t.tiktok.com/api/post/item_list/?aid=1988&app_name=tiktok_web&device_platform=web&referer=&root_referer=&user_agent=Mozilla%2F5.0+(X11%3B+Linux+x86_64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F90.0.4430.72+Safari%2F537.36&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=en-US&browser_platform=Linux+x86_64&browser_name=Mozilla&browser_version=5.0+(X11%3B+Linux+x86_64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F90.0.4430.72+Safari%2F537.36&browser_online=true&ac=4g&timezone_name=Asia%2FSaigon&page_referer=https:%2F%2Fwww.tiktok.com%2Fforyou%3Fis_copy_url%3D1%26is_from_webapp%3Dv1%26item_id%3D6951228109031050498%23%2F%40thaolee.official%2Fvideo%2F6951228109031050498&priority_region=&verifyFp=verify_kgsyrbwt_tLDbPNWk_wiEX_4gbh_9ldY_01cwByO73PHC&appId=1180&region=VN&appType=t&isAndroid=false&isMobile=false&isIOS=false&OS=linux&did=6888540087794402817&count=30&cursor=1586696317000&secUid=MS4wLjABAAAAexBI8pND2Wvo69zANDTsmFnzZRZItUGLluaGK-5_Y54&language=en',
        ).then(value => {
            console.log(value);
            expect(value).toBeDefined();
        });
    });
});
