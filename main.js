import { createClient } from '@supabase/supabase-js';
import './style.css';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const configured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
const supabase = configured ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const copy = {
  ar: {dir:'rtl', brand:'MINNIG IRAQIYAN', sub:'منصة معلومات وإدارة التعدين', nav:'الرئيسية', about:'عن المنصة', login:'تسجيل الدخول', signup:'إنشاء حساب', hero:'مستقبل التعدين يبدأ من هنا', desc:'منصة لمتابعة معلومات أجهزة التعدين وإدارة حسابك بوضوح وشفافية.', start:'ابدأ الآن', learn:'اكتشف المنصة', features:'خدمات المنصة', f1:'إدارة الحساب', f1d:'إنشاء حساب وتسجيل دخول آمن عبر Supabase.', f2:'معلومات التعدين', f2d:'تابع معلومات الأجهزة وحالة التشغيل عند توفر الربط الفعلي.', f3:'وضوح وشفافية', f3d:'لا توجد أرباح مضمونة أو عوائد تلقائية؛ النتائج تعتمد على بيانات التعدين الفعلية والتكاليف.', demo:'عرض توضيحي فقط', demoText:'أي أرقام تجريبية هنا ليست أموالاً حقيقية ولا تمثل أرباحاً أو وعداً بالعائد.', email:'البريد الإلكتروني', password:'كلمة المرور', doLogin:'دخول', doSignup:'إنشاء الحساب', logout:'تسجيل الخروج', welcome:'أهلاً بك', account:'حسابك', status:'حالة الربط', connected:'متصل بـ Supabase', missing:'أكمل إعداد مفاتيح Supabase في Vercel', footer:'© MINNIG IRAQIYAN — جميع الحقوق محفوظة', authTitle:'حسابك في المنصة', authHint:'استخدم بريدك الإلكتروني لإنشاء حساب أو تسجيل الدخول.', noConfig:'إعداد Supabase غير مكتمل. أضف متغيرات البيئة المطلوبة قبل استخدام الحسابات.', checkEmail:'تم إنشاء الحساب. افحص بريدك لتأكيده إذا كان تأكيد البريد مفعّلاً.', genericError:'حدث خطأ. تحقق من البيانات وحاول مرة أخرى.', signedIn:'تم تسجيل الدخول بنجاح.'},
  en: {dir:'ltr', brand:'MINNIG IRAQIYAN', sub:'Mining information & account platform', nav:'Home', about:'About', login:'Log in', signup:'Create account', hero:'The future of mining starts here', desc:'A platform to follow mining equipment information and manage your account clearly and transparently.', start:'Get started', learn:'Explore', features:'Platform features', f1:'Account management', f1d:'Create an account and sign in securely with Supabase.', f2:'Mining information', f2d:'Track equipment information and operating status when real integrations are available.', f3:'Clarity & transparency', f3d:'No guaranteed profits or automatic returns; results depend on actual mining data and costs.', demo:'Demo information only', demoText:'Any sample figures are not real money and do not represent profits or a return promise.', email:'Email address', password:'Password', doLogin:'Log in', doSignup:'Create account', logout:'Log out', welcome:'Welcome', account:'Your account', status:'Connection status', connected:'Connected to Supabase', missing:'Add Supabase environment keys in Vercel', footer:'© MINNIG IRAQIYAN — All rights reserved', authTitle:'Your platform account', authHint:'Use your email to create an account or sign in.', noConfig:'Supabase setup is incomplete. Add the required environment variables before using accounts.', checkEmail:'Account created. Check your email to confirm it if email confirmation is enabled.', genericError:'Something went wrong. Check your details and try again.', signedIn:'You are signed in.'},
  ku: {dir:'rtl', brand:'MINNIG IRAQIYAN', sub:'پلاتفۆرمی زانیاری و بەڕێوەبردنی کانزاکانی دیجیتاڵ', nav:'سەرەکی', about:'دەربارە', login:'چوونەژوورەوە', signup:'دروستکردنی هەژمار', hero:'داهاتووی کانزاکانی دیجیتاڵ لێرە دەست پێدەکات', desc:'پلاتفۆرمێک بۆ بەدواداچوونی زانیاری ئامێرەکان و بەڕێوەبردنی هەژمار بە ڕوونی.', start:'دەست پێبکە', learn:'زیاتر بزانە', features:'خزمەتگوزارییەکان', f1:'بەڕێوەبردنی هەژمار', f1d:'دروستکردنی هەژمار و چوونەژوورەوە بە شێوەیەکی پارێزراو.', f2:'زانیاری کانزاکان', f2d:'زانیاری ئامێر و دۆخی کارکردن بەدواداچوون بکە.', f3:'ڕوونی و شەفافیەت', f3d:'هیچ قازانجێک دڵنیایی نییە؛ ئەنجامەکان بەستراونەتەوە بە داتای ڕاستەقینە و تێچوو.', demo:'تەنها بۆ نموونە', demoText:'ژمارە نموونەییەکان پارەی ڕاستەقینە نین و بەڵێنی قازانج نین.', email:'ئیمەیڵ', password:'وشەی نهێنی', doLogin:'چوونەژوورەوە', doSignup:'دروستکردنی هەژمار', logout:'چوونەدەرەوە', welcome:'بەخێربێیت', account:'هەژمارەکەت', status:'دۆخی پەیوەندی', connected:'پەیوەستە بە Supabase', missing:'کلیلەکانی Supabase لە Vercel زیاد بکە', footer:'© MINNIG IRAQIYAN', authTitle:'هەژماری پلاتفۆرم', authHint:'ئیمەیڵەکەت بەکاربهێنە بۆ دروستکردنی هەژمار یان چوونەژوورەوە.', noConfig:'ڕێکخستنی Supabase تەواو نییە.', checkEmail:'هەژمار دروستکرا. ئیمەیڵەکەت بپشکنە.', genericError:'هەڵەیەک ڕوویدا. دووبارە هەوڵ بدەرەوە.', signedIn:'بە سەرکەوتوویی چوویتە ژوورەوە.'}
};
let lang = 'ar';
let user = null;
const app = document.querySelector('#app');
const t = (key) => copy[lang][key] || copy.ar[key] || key;

function render() {
  document.documentElement.lang = lang;
  document.documentElement.dir = t('dir');
  app.innerHTML = `
    <header class="top"><a class="logo" href="#home"><span class="mark">M</span><span>${t('brand')}<small>${t('sub')}</small></span></a>
      <nav><a href="#home">${t('nav')}</a><a href="#features">${t('about')}</a></nav>
      <div class="tools"><select id="language" aria-label="Language"><option value="ar" ${lang==='ar'?'selected':''}>العربية</option><option value="ku" ${lang==='ku'?'selected':''}>کوردی</option><option value="en" ${lang==='en'?'selected':''}>English</option></select>${user?`<button class="outline" id="logout">${t('logout')}</button>`:`<a class="small-link" href="#account">${t('login')}</a>`}</div>
    </header>
    <main id="home">
      <section class="hero"><div class="glow"></div><div class="hero-content"><div class="eyebrow"><i></i> ${t('brand')}</div><h1>${t('hero')}</h1><p>${t('desc')}</p><div class="actions"><a class="gold-btn" href="#account">${t('start')} <span>↗</span></a><a class="text-btn" href="#features">${t('learn')}</a></div></div><div class="hero-art"><div class="ring ring1"></div><div class="ring ring2"></div><div class="coin">M</div><div class="orbit o1"></div><div class="orbit o2"></div></div></section>
      <section class="features" id="features"><div class="section-head"><span class="eyebrow">01 / ${t('brand')}</span><h2>${t('features')}</h2></div><div class="cards"><article class="feature"><div class="ico">◈</div><h3>${t('f1')}</h3><p>${t('f1d')}</p></article><article class="feature"><div class="ico">⌁</div><h3>${t('f2')}</h3><p>${t('f2d')}</p></article><article class="feature"><div class="ico">◇</div><h3>${t('f3')}</h3><p>${t('f3d')}</p></article></div></section>
      <section class="account" id="account"><div class="account-copy"><span class="eyebrow">02 / ACCOUNT</span><h2>${user?t('welcome')+', '+(user.email||''):t('authTitle')}</h2><p>${user?t('signedIn'):t('authHint')}</p>${user?`<div class="status"><span class="dot"></span>${t('connected')}</div>`:`<div class="status"><span class="dot ${configured?'':'off'}"></span>${configured?t('connected'):t('missing')}</div>`}</div>
      ${user?`<div class="auth-card"><div class="card-label">${t('account')}</div><div class="email-view">${user.email||''}</div><p class="muted">${t('signedIn')}</p></div>`:`<form class="auth-card" id="auth-form"><div class="card-label">${t('login')} / ${t('signup')}</div><label>${t('email')}<input name="email" type="email" required autocomplete="email" placeholder="name@example.com"></label><label>${t('password')}<input name="password" type="password" required minlength="6" autocomplete="current-password" placeholder="••••••••"></label><div class="auth-actions"><button class="gold-btn" type="submit" name="mode" value="login">${t('doLogin')}</button><button class="outline" type="button" id="signup">${t('doSignup')}</button></div><p class="message" id="message">${configured?'':t('noConfig')}</p></form>`}</section>
      <section class="notice"><strong>${t('demo')}</strong><p>${t('demoText')}</p></section>
    </main><footer><span>${t('footer')}</span><span class="foot-mark">MINNIG <b>IRAQIYAN</b></span></footer>`;
  document.querySelector('#language').addEventListener('change', e=>{lang=e.target.value;render();});
  if (!user) {
    const form=document.querySelector('#auth-form');
    form.addEventListener('submit', async e=>{e.preventDefault();await authenticate('login',new FormData(form));});
    document.querySelector('#signup').addEventListener('click', async()=>{await authenticate('signup',new FormData(form));});
  } else document.querySelector('#logout').addEventListener('click', async()=>{await supabase.auth.signOut();user=null;render();});
}
async function authenticate(mode, data) {
  const msg=document.querySelector('#message');
  if(!configured){msg.textContent=t('noConfig');return;}
  const email=String(data.get('email')||'').trim(); const password=String(data.get('password')||'');
  msg.textContent='…';
  const result=mode==='signup'?await supabase.auth.signUp({email,password}):await supabase.auth.signInWithPassword({email,password});
  if(result.error){msg.textContent=result.error.message;return;}
  if(mode==='signup'&&!result.data.session){msg.textContent=t('checkEmail');return;}
  user=result.data.user; msg.textContent=t('signedIn'); render();
}
if(configured){supabase.auth.getSession().then(({data})=>{user=data.session?.user||null;render();});supabase.auth.onAuthStateChange((_event,session)=>{user=session?.user||null;render();});} else render();
