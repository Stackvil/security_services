const fs = require('fs');
const https = require('https');
const path = require('path');

const SUPABASE_URL = 'https://xvieythbjbtqsraxwyrs.supabase.co';
const ANON_KEY = 'sb_publishable_KxjJM4IleGrL90atCh-bWQ_vylLPG4J';

const dataFiles = {
    'services_data': 'src/data/services.json',
    'training_data': 'src/data/training.json',
    'blog_data': 'src/data/blog.json',
    'careers_data': 'src/data/careers.json',
    'testimonials_data': 'src/data/testimonials.json',
    'about_data': 'src/data/about.json'
};

async function migrate() {
    for (const [key, relativePath] of Object.entries(dataFiles)) {
        const absolutePath = path.join(__dirname, '..', relativePath);
        console.log(`Reading ${absolutePath}...`);

        if (!fs.existsSync(absolutePath)) {
            console.error(`File not found: ${absolutePath}`);
            continue;
        }

        const content = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
        const body = JSON.stringify({ key, content });

        console.log(`Migrating ${key} to Supabase...`);

        try {
            await new Promise((resolve, reject) => {
                const req = https.request(`${SUPABASE_URL}/rest/v1/site_content`, {
                    method: 'POST',
                    headers: {
                        'apikey': ANON_KEY,
                        'Authorization': `Bearer ${ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'resolution=merge-duplicates'
                    }
                }, (res) => {
                    let resBody = '';
                    res.on('data', chunk => resBody += chunk);
                    res.on('end', () => {
                        if (res.statusCode >= 200 && res.statusCode < 300) {
                            console.log(`SUCCESS: ${key}`);
                            resolve();
                        } else {
                            console.error(`FAILURE ${key}: ${res.statusCode}`, resBody);
                            // We don't want to bail on the whole process if one fails, but we'll record it
                            resolve();
                        }
                    });
                });

                req.on('error', (err) => {
                    console.error(`Network error for ${key}:`, err.message);
                    resolve();
                });
                req.write(body);
                req.end();
            });
        } catch (e) {
            console.error(`Unexpected error migrating ${key}:`, e.message);
        }
    }
}

migrate().then(() => console.log('Migration process completed.'));
