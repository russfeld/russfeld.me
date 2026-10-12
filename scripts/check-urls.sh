#!/usr/bin/env bash
# Compare a built site against the URL baseline captured from the pre-migration site.
# Usage: scripts/check-urls.sh [public_dir]
# Paths matching a prefix in scripts/redirected-urls.txt are expected to be
# missing (nginx 301s them) and are skipped.
set -euo pipefail
cd "$(dirname "$0")/.."
public="${1:-public}"
baseline=scripts/baseline-urls.txt
redirects=scripts/redirected-urls.txt

current=$(cd "$public" && find . -type f | sed 's|^\.||; s|/index.html$|/|' | LC_ALL=C sort)
expected=$(cat "$baseline")
if [[ -s $redirects ]]; then
  expected=$(awk 'NR==FNR { if ($0 !~ /^#/ && $0 != "") p[++n]=$0; next }
                  { for (i=1;i<=n;i++) if (index($0,p[i])==1) next; print }' "$redirects" "$baseline")
fi

missing=$(LC_ALL=C comm -23 <(echo "$expected") <(echo "$current"))
if [[ -n $missing ]]; then
  echo "Missing $(wc -l <<<"$missing") baseline URL(s):"
  echo "$missing"
  exit 1
fi
echo "OK: all $(wc -l <<<"$expected") baseline URLs present."
