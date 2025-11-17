---
title: '10 Wesentliche Dateisystemoperationen für Entwickler'
description: 'Dieser Leitfaden bietet einen umfassenden Überblick über grundlegende Dateisystemoperationen in Python, inklusive Beispiele und Best Practices.'
date: 'Aug 03, 2025'
updated: 'Aug 03, 2025'
tags: 'python, intermediate, file system'
socialImage: '/blog/path-lib-essentials.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "10 Wesentliche Dateisystemoperationen für Entwickler"
    description: "Dieser Leitfaden bietet einen umfassenden Überblick über grundlegende Dateisystemoperationen in Python, inklusive Beispiele und Best Practices."
    date: "Aug 03, 2025"
    updated: "Aug 03, 2025"
    tags: "python, intermediate, file system"
    socialImage: "/blog/path-lib-essentials.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="10 Wesentliche Dateisystemoperationen für Entwickler" />

Das Arbeiten mit Dateien und Verzeichnissen ist ein fundamentaler Bestandteil der Python-Entwicklung, doch viele Entwickler beschränken sich auf grundlegende Operationen, ohne die volle Leistungsfähigkeit der Pfadbehandlungsfunktionen von Python zu erkunden. Ob Sie Webanwendungen, Datenverarbeitungspipelines oder Automatisierungsskripte erstellen, die Beherrschung dieser wesentlichen Dateisystemmuster macht Ihren Code robuster, effizienter und wartbarer.

## 1. Intelligente Dateisuche mit Glob-Mustern

Oft müssen Sie Dateien basierend auf einem Muster und nicht nur auf einem exakten Namen finden. Die `glob`-Methode des <router-link to="/modules/pathlib-module">Path</router-link>-Objekts ist ein leistungsstarkes und intuitives Werkzeug dafür.

### Einfache & Rekursive Suche

Angenommen, Sie haben ein Projekt in einem `src/`-Ordner. So finden Sie alle Ihre Python-Dateien.

```python
from pathlib import Path

# Das Path-Objekt ist Ihr Hauptwerkzeug für Dateisystemoperationen.
project_dir = Path("src/")

# 1. Finden Sie alle Python-Dateien im obersten Verzeichnis von 'src'.
# Das Sternchen (*) ist ein Platzhalter für "stimmt mit allem überein".
print("--- .py-Dateien der obersten Ebene ---")
for f in project_dir.glob("*.py"):
    print(f)

# 2. Finden Sie alle Python-Dateien REKURSIV in allen Unterverzeichnissen.
# Die 'rglob'-Methode ist Ihr bester Freund für tiefe Suchen.
print("\n--- Alle .py-Dateien im Projekt ---")
for f in project_dir.rglob("*.py"):
    print(f)

# Beispielausgabe:
# --- .py-Dateien der obersten Ebene ---
# src/main.py
# --- Alle .py-Dateien im Projekt ---
# src/main.py
# src/utils/helpers.py
# src/api/models.py
```

### Erweiterte Mustererkennung

`glob` unterstützt mehr als nur `*`. Sie können `?` verwenden, um ein einzelnes Zeichen abzugleichen, und `[]`, um einen Zeichenbereich abzugleichen, genau wie in der Shell.

```python
from pathlib import Path

# Um dies auszuführen, erstellen Sie ein 'logs'-Verzeichnis mit den Beispieldateien.
logs_dir = Path("logs/")
logs_dir.mkdir(exist_ok=True)
Path("logs/app1.log").touch()
Path("logs/app2.log").touch()
Path("logs/app_extra.log").touch()
Path("logs/2023-10-01.log").touch()
Path("logs/2023-11-01.log").touch()


# Finden Sie Logs wie 'app1.log', 'app2.log', aber nicht 'app_extra.log'
print("--- Platzhalter für ein einzelnes Zeichen ---")
for f in logs_dir.glob("app?.log"):
    print(f)

# Finden Sie Logs vom Oktober oder November 2023
print("\n--- Zeichenbereich ---")
for f in logs_dir.glob("2023-[10-11]-*.log"):
    print(f)

# Beispielausgabe:
# --- Platzhalter für ein einzelnes Zeichen ---
# logs/app1.log
# logs/app2.log
#
# --- Zeichenbereich ---
# logs/2023-10-01.log
# logs/2023-11-01.log
```

## 2. Verzeichnisse präzise navigieren

Manchmal benötigen Sie mehr Kontrolle, als `rglob` bietet, beispielsweise wenn Sie bestimmte Verzeichnisse überspringen müssen. Anstatt auf <router-link to="/modules/os-module#walking-a-directory-tree">os.walk</router-link> zurückzugreifen, können Sie eine saubere, rekursive Funktion schreiben, die die eigenen Methoden von `pathlib` verwendet.

```python
from pathlib import Path

def smart_directory_walk(root_path, skip_dirs=None, file_patterns=None):
    """
    Durchläuft einen Verzeichnisbaum mithilfe von pathlib und ermöglicht das Überspringen ganzer
    Unterbäume und das nur das Yielden von Dateien, die bestimmten Mustern entsprechen.
    """
    if skip_dirs is None:
        # Ein Set wird für schnelle Lookups verwendet.
        skip_dirs = {'.git', '__pycache__', 'node_modules', '.venv'}
    if file_patterns is None:
        file_patterns = ["*"]

    root = Path(root_path)
    for item in root.iterdir():
        # Wenn das Element ein Verzeichnis ist, entscheiden Sie, ob Sie rekursiv hineingehen sollen.
        if item.is_dir() and item.name not in skip_dirs:
            # yield from ist eine saubere Methode, um die Ergebnisse des rekursiven Aufrufs weiterzugeben.
            yield from smart_directory_walk(item, skip_dirs, file_patterns)
        # Wenn es eine Datei ist, prüfen Sie, ob sie unseren Mustern entspricht.
        elif item.is_file():
            if any(item.match(p) for p in file_patterns):
                yield item

if __name__ == "__main__":
    print("Suche nach Python- und Textdateien, wobei Standard-Virtual-Envs übersprungen werden:")
    # Um dies auszuführen, erstellen Sie einige Dummy-Dateien und Ordner.
    project_root = Path(".")
    (project_root / "src").mkdir(exist_ok=True)
    (project_root / "src" / "main.py").touch()
    (project_root / ".venv").mkdir(exist_ok=True)
    (project_root / ".venv" / "ignored.py").touch()

    for f in smart_directory_walk(project_root, file_patterns=["*.py", "*.txt"]):
        print(f"Gefunden: {f}")
```

## 3. Dateien atomar schreiben für Datensicherheit

Was passiert, wenn Ihr Skript mitten beim Schreiben von <router-link to="/cheatsheet/json-yaml#json">config.json</router-link> abstürzt? Sie erhalten eine beschädigte Datei. Eine **atomare Operation** verhindert dies: Es ist eine Alles-oder-Nichts-Aktion. Der Standardweg hierfür ist das Schreiben in eine temporäre Datei und das anschließende Ausführen einer einzigen, atomaren `move`-Operation.

```python
import tempfile
import shutil
import os
from pathlib import Path

def atomic_write(file_path, content, encoding='utf-8'):
    """
    Schreibt Inhalt atomar in eine Datei, um Datenkorruption zu verhindern.
    """
    target_path = Path(file_path)
    target_path.parent.mkdir(parents=True, exist_ok=True)

    # Erstellen Sie eine temporäre Datei im selben Verzeichnis wie die Zieldatei.
    # Dies ist entscheidend, da das Verschieben einer Datei im selben Dateisystem atomar ist.
    with tempfile.NamedTemporaryFile(
        mode='w',
        encoding=encoding,
        dir=target_path.parent,
        delete=False,
        suffix='.tmp'
    ) as tmp_file:
        tmp_file.write(content)
        # Für kritische Daten stellt os.fsync() sicher, dass die Daten physisch
        # auf die Festplatte geschrieben werden. Dies ist einer der wenigen Fälle, in denen das os-Modul
        # für Low-Level-Kontrolle noch notwendig ist.
        tmp_file.flush()
        os.fsync(tmp_file.fileno())
        temp_path = tmp_file.name

    # Die atomare Operation: Umbenennen der temporären Datei in das endgültige Ziel.
    # shutil.move ist intelligent und funktioniert über verschiedene Dateisysteme hinweg.
    shutil.move(temp_path, target_path)
    print(f"Atomar geschrieben nach {target_path}")

if __name__ == "__main__":
    # Dies erstellt 'config/settings.json' sicher.
    atomic_write("config/settings.json", '{"theme": "dark", "retries": 3}')
```

## 4. Temporäre Dateien und Verzeichnisse meistern

Temporäre Dateien sind für die Zwischenverarbeitung unerlässlich. Pythons `tempfile`-Modul lässt sich hervorragend mit `pathlib` integrieren und erstellt sichere Dateien und Verzeichnisse, die sich automatisch selbst aufräumen.

```python
import tempfile
import json
from pathlib import Path

# Eine Dummy-Funktion zur Simulation der Arbeit
def process_file(file_path):
    print(f"Verarbeite {file_path}...")
    return f"processed_{file_path.name}"

def batch_process_data(list_of_data):
    """
    Verwendet ein temporäres Verzeichnis zur Verarbeitung eines Datenstapels und stellt sicher,
    dass alle Zwischendateien automatisch bereinigt werden.
    """
    # TemporaryDirectory erstellt ein Verzeichnis, das entfernt wird, wenn der 'with'-Block verlassen wird.
    with tempfile.TemporaryDirectory() as tmp_dir_str:
        tmp_dir = Path(tmp_dir_str)
        print(f"Temporäres Verzeichnis erstellt: {tmp_dir}")
        results = []

        for i, data_item in enumerate(list_of_data):
            # Erstellen eines temporären Path-Objekts innerhalb unseres temporären Verzeichnisses
            temp_file = tmp_dir / f"input_{i}.json"
            temp_file.write_text(json.dumps(data_item))

            result = process_file(temp_file)
            results.append(result)

        # Das 'tmp_dir' und alle seine Inhalte werden hier automatisch gelöscht.
        return results

if __name__ == "__main__":
    data_to_process = [{"id": 1, "value": "A"}, {"id": 2, "value": "B"}]
    final_results = batch_process_data(data_to_process)
    print(f"\nEndergebnisse: {final_results}")
    print("Temporäres Verzeichnis wurde entfernt.")
```

## 5. Benutzerbereitgestellte Pfade validieren und bereinigen

Vertrauen Sie niemals einem Pfad, der aus einer externen Quelle stammt. Ein böswilliger Benutzer könnte `../../etc/passwd` angeben, um zu versuchen, sensible Dateien zu lesen. Sie müssen alle externen Pfadeingaben mithilfe der integrierten Sicherheitsfunktionen von `pathlib` validieren und bereinigen.

```python
import re
from pathlib import Path

def sanitize_filename(filename, replacement='_'):
    """
    Bereinigt einen String, sodass er ein gültiger und sicherer Dateiname für jedes OS ist.
    """
    invalid_chars = r'[<>:"/\\|?*\x00-\x1f]'
    sanitized = re.sub(invalid_chars, replacement, filename)
    # Zusätzliche Prüfungen können hier hinzugefügt werden (z. B. für reservierte Windows-Namen)
    return sanitized.strip(' .')

def validate_and_resolve_path(base_dir, user_path_str):
    """
    Löst einen sicher vom Benutzer bereitgestellten Pfad auf und stellt sicher, dass er innerhalb eines Basisverzeichnisses bleibt.
    Dies ist ENTSCHEIDEND, um Angriffe durch Verzeichnisdurchquerung zu verhindern.
    """
    base_dir = Path(base_dir).resolve()

    # resolve() erstellt einen kanonischen, absoluten Pfad und bereinigt '..'-Segmente.
    resolved_path = (base_dir / user_path_str).resolve()

    # Die entscheidende Sicherheitsprüfung: Liegt der endgültige Pfad noch innerhalb unseres sicheren base_dir?
    # Path.is_relative_to() wurde in Python 3.9 hinzugefügt und ist perfekt dafür.
    if resolved_path.is_relative_to(base_dir):
        return resolved_path
    else:
        raise PermissionError("Versuch der Pfaddurchquerung erkannt.")

if __name__ == "__main__":
    # 1. Bereinigen eines potenziell unsauberen Dateinamens
    dirty_name = "My Report: Part 1/2 <Final?>.docx"
    clean_name = sanitize_filename(dirty_name)
    print(f"Bereinigt '{dirty_name}' zu '{clean_name}'")

    # 2. Validieren eines Benutzerpfads
    upload_dir = "uploads"
    Path(upload_dir).mkdir(exist_ok=True)
    try:
        # Sicherer Pfad
        safe_path = validate_and_resolve_path(upload_dir, "images/profile.jpg")
        print(f"OK: Pfad ist sicher: {safe_path}")

        # Bösartiger Pfad
        malicious_path_str = "../../../etc/hosts"
        print(f"\nTeste bösartigen Pfad: '{malicious_path_str}'")
        validate_and_resolve_path(upload_dir, malicious_path_str)
    except PermissionError as e:
        print(f"FEHLER: {e}")
```

## 6. Verzeichnisgröße mit `pathlib` berechnen

Die Berechnung der Verzeichnisgröße ist eine klassische Aufgabe. Obwohl `os.scandir` für seine Geschwindigkeit bekannt ist, ist ein reiner `pathlib`-Ansatz mit `rglob` oft lesbarer und bequemer für alle außer den leistungskritischsten Anwendungen auf riesigen Dateisystemen.

```python
from pathlib import Path

def calculate_directory_size(directory):
    """
    Berechnet die Gesamtgröße eines Verzeichnisses und aller seiner Unterverzeichnisse
    mithilfe eines lesbaren, reinen pathlib-Ansatzes.
    """
    dir_path = Path(directory)
    total_size = 0
    # rglob('*') ist ein Generator, lädt also nicht alle Pfade auf einmal in den Speicher.
    for path in dir_path.rglob('*'):
        # Wir summieren nur die Größe von Dateien auf.
        if path.is_file():
            try:
                # path.stat().st_size gibt die Größe in Bytes zurück.
                total_size += path.stat().st_size
            except (PermissionError, FileNotFoundError):
                # Dateien, auf die wir nicht zugreifen können, ignorieren.
                continue
    return total_size

def format_size(size_bytes):
    """Formatiert Bytes in eine menschenlesbare Zeichenfolge (KB, MB, GB)."""
    if size_bytes == 0:
        return "0B"
    units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    i = 0
    while size_bytes >= 1024 and i < len(units) - 1:
        size_bytes /= 1024
        i += 1
    return f"{size_bytes:.2f} {units[i]}"

if __name__ == "__main__":
    target_directory = "."
    print(f"Berechne Größe von '{Path(target_directory).resolve()}'...")
    total_bytes = calculate_directory_size(target_directory)
    print(f"Gesamtgröße: {format_size(total_bytes)} ({total_bytes:,} Bytes)")
```

## 7. Große Dateien mit Fortschritt und Verifizierung kopieren

Beim Kopieren großer Dateien möchten Sie dem Benutzer Feedback geben und sicherstellen, dass die kopierte Datei nicht beschädigt ist. Dieses Muster kombiniert `shutil` zum Kopieren, `hashlib` für die Datenintegrität und die `tqdm`-Bibliothek für eine schöne Fortschrittsanzeige.

**Hinweis:** Sie müssen `tqdm` installieren: `pip install tqdm`

```python
import shutil
import hashlib
import os
from pathlib import Path
from tqdm import tqdm

def calculate_file_hash(file_path, algorithm='sha256', chunk_size=65536):
    """Berechnet den Hash einer Datei."""
    hash_obj = hashlib.new(algorithm)
    with Path(file_path).open('rb') as f:
        for chunk in iter(lambda: f.read(chunk_size), b""):
            hash_obj.update(chunk)
    return hash_obj.hexdigest()

def copy_with_verification(src, dst):
    """
    Kopiert eine Datei mit einer Fortschrittsanzeige und überprüft die Integrität der Kopie.
    """
    src_path, dst_path = Path(src), Path(dst)
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    src_size = src_path.stat().st_size
    print(f"Berechne Hash für {src_path.name}...")
    src_hash = calculate_file_hash(src_path)

    print(f"Kopiere {src_path.name} nach {dst_path}...")
    with src_path.open('rb') as fsrc, \
         dst_path.open('wb') as fdst, \
         tqdm(total=src_size, unit='B', unit_scale=True, desc=src_path.name) as pbar: \
        shutil.copyfileobj(fsrc, fdst, length=16*1024*1024)
        # Manuelle Aktualisierung der Fortschrittsanzeige, falls copyfileobj vor tqdm-Updates fertig wird
        pbar.n = src_size
        pbar.refresh()


    print("Überprüfe Kopie...")
    dst_hash = calculate_file_hash(dst_path)

    if src_hash != dst_hash:
        dst_path.unlink() # Lösche die beschädigte Kopie
        raise IOError(f"Verifizierung fehlgeschlagen! Hashes stimmen nicht überein für {dst_path}")

    print(f"Erfolg! {dst_path.name} kopiert und verifiziert.")
    return dst_path

if __name__ == "__main__":
    source_file = Path("large_file.dat")
    if not source_file.exists():
        print(f"Erstelle Dummy-Datei '{source_file}'...")
        # os.urandom wird hier einfach verwendet, um Zufallsbytes für eine Dummy-Datei zu erhalten.
        source_file.write_bytes(os.urandom(50 * 1024 * 1024)) # 50 MB

    try:
        copy_with_verification(source_file, Path("backup/large_file.dat"))
    except (IOError, FileNotFoundError) as e:
        print(f"Ein Fehler ist aufgetreten: {e}")
```

## 8. Ein Verzeichnis auf Änderungen überwachen

Möchten Sie automatisch Dateien verarbeiten, die in einen Ordner abgelegt werden? Sie benötigen einen Dateisystem-Watcher. Während Bibliotheken wie `watchdog` für die Produktion am besten geeignet sind, ist es gut zu wissen, wie man mit `pathlib` und Polling einen einfachen selbst erstellt.

```python
import time
from pathlib import Path
from collections import defaultdict

class SimpleFileWatcher:
    """Ein einfacher Dateiwacher, der ein Verzeichnis auf Änderungen abfragt."""
    def __init__(self, watch_directory, patterns=None):
        self.watch_dir = Path(watch_directory)
        self.patterns = patterns or ["*"]
        self._file_states = {} # Speichert {pfad: mtime}
        self.callbacks = defaultdict(list)

    def on(self, event_type, callback):
        self.callbacks[event_type].append(callback)

    def _trigger(self, event_type, file_path):
        for callback in self.callbacks[event_type]:
            try:
                callback(file_path)
            except Exception as e:
                print(f"Fehler im Callback: {e}")

    def watch(self, poll_interval=1.0):
        print(f"Überwache {self.watch_dir.resolve()}... (Drücken Sie Strg+C zum Beenden)")
        try:
            while True:
                self._scan()
                time.sleep(poll_interval)
        except KeyboardInterrupt:
            print("\nBeende Wacher.")

    def _scan(self):
        current_files = set()
        for pattern in self.patterns:
            for path in self.watch_dir.rglob(pattern):
                if path.is_file():
                    current_files.add(path)
                    try:
                        mtime = path.stat().st_mtime
                        if path not in self._file_states:
                            self._file_states[path] = mtime
                            self._trigger('created', path)
                        elif self._file_states[path] != mtime:
                            self._file_states[path] = mtime
                            self._trigger('modified', path)
                    except FileNotFoundError:
                        continue

        deleted_files = set(self._file_states.keys()) - current_files
        for path in deleted_files:
            del self._file_states[path]
            self._trigger('deleted', path)

def log_change(event):
    def handler(path):
        print(f"[{event.upper()}] - {path.name} um {time.ctime()}")
    return handler

if __name__ == "__main__":
    watch_folder = Path("watched_folder")
    watch_folder.mkdir(exist_ok=True)

    watcher = SimpleFileWatcher(watch_folder, patterns=["*.txt", "*.csv"])
    watcher.on('created', log_change('created'))
    watcher.on('modified', log_change('modified'))

    print("Wacher gestartet. Versuchen Sie, Dateien in 'watched_folder' zu erstellen/bearbeiten.")
    watcher.watch()
```

## 9. Konfigurationsdateien flexibel verwalten

Anwendungen benötigen Konfigurationen aus Dateien (<router-link to="/cheatsheet/json-yaml#json">JSON</router-link>, <router-link to="/cheatsheet/json-yaml#yaml">YAML</router-link>, INI). Dieser `ConfigManager` behandelt verschiedene Formate anmutig und verwendet die `pathlib`-Funktionen zur Verwaltung von Pfaden und unsere `atomic_write`-Funktion, um Einstellungen sicher zu speichern.

**Hinweis:** Sie benötigen `PyYAML`: `pip install pyyaml`

```python
import json
import yaml
import configparser
from pathlib import Path
from typing import Any, Dict

# In einem realen Projekt wäre die 'atomic_write'-Funktion aus Muster 3 in einer
# gemeinsamen utils.py-Datei. Wir gehen davon aus, dass sie hier verfügbar ist.

class ConfigManager:
    """Ein Manager zum Laden und Speichern von Konfigurationsdateien in verschiedenen Formaten."""
    def __init__(self, config_path: str):
        self.path = Path(config_path)
        self.type = self.path.suffix.lower().strip('.')

    def load(self) -> Dict[str, Any]:
        if not self.path.exists():
            return {}
        try:
            with self.path.open('r', encoding='utf-8') as f:
                if self.type == 'json':
                    return json.load(f)
                elif self.type in ['yaml', 'yml']:
                    return yaml.safe_load(f) or {}
                # Fügen Sie bei Bedarf andere Formate wie INI hinzu
        except Exception as e:
            raise IOError(f"Fehler beim Laden der Konfiguration {self.path}: {e}")
        return {}

    def save(self, config: Dict[str, Any]):
        content = ""
        try:
            if self.type == 'json':
                content = json.dumps(config, indent=2)
            elif self.type in ['yaml', 'yml']:
                content = yaml.dump(config, default_flow_style=False)
            # Verwenden Sie unsere sichere Schreibfunktion
            atomic_write(self.path, content)
        except Exception as e:
            raise IOError(f"Fehler beim Speichern der Konfiguration {self.path}: {e}")

if __name__ == "__main__":
    json_config = ConfigManager("config.yml")
    settings = {
        "database": {"host": "db.example.com", "port": 5432},
        "features": {"new_ui": True, "beta_access": False}
    }
    print(f"Speichere Einstellungen in {json_config.path}...")
    json_config.save(settings)

    loaded = json_config.load()
    print("Geladene Einstellungen:")
    print(yaml.dump(loaded))
    assert settings == loaded
```

## 10. Archive (ZIP, TAR) sicher verwalten

Die Arbeit mit <router-link to="/modules/zipfile-module">.zip</router-link>- oder <router-link to="/modules/zipfile-module">.tar.gz</router-link>-Dateien ist üblich. Dieser `ArchiveManager` verwendet `pathlib`, um eine einfache, sichere Schnittstelle zum Erstellen und Extrahieren von Archiven bereitzustellen, einschließlich entscheidender Prüfungen, um Angriffe durch Pfaddurchquerung zu verhindern.

```python
import zipfile
import tarfile
from pathlib import Path

class ArchiveManager:
    """Eine sichere und einfache Schnittstelle zur Handhabung von zip- und tar-Archiven."""

    def _is_path_safe(self, path_str, target_dir):
        target_dir = Path(target_dir).resolve()
        resolved_path = (target_dir / path_str).resolve()
        return resolved_path.is_relative_to(target_dir)

    def extract(self, archive_path, extract_to):
        archive_path = Path(archive_path)
        extract_to = Path(extract_to)
        extract_to.mkdir(parents=True, exist_ok=True)

        if archive_path.suffix == '.zip':
            with zipfile.ZipFile(archive_path, 'r') as archive:
                for member_name in archive.namelist():
                    if self._is_path_safe(member_name, extract_to):
                        archive.extract(member_name, extract_to)
                    else:
                        print(f"WARNUNG: Unsicherer Pfad in Zip übersprungen: {member_name}")
        elif '.tar' in "".join(archive_path.suffixes):
            with tarfile.open(archive_path, 'r:*') as archive:
                for member in archive.getmembers():
                    if self._is_path_safe(member.name, extract_to):
                        archive.extract(member, path=extract_to, set_attrs=False)
                    else:
                        print(f"WARNUNG: Unsicherer Pfad in Tar übersprungen: {member.name}")
        else:
            raise ValueError(f"Nicht unterstützter Archivtyp: {archive_path.suffix}")
        print(f"Erfolgreich {archive_path.name} nach {extract_to} extrahiert")

    def create(self, source_dir, output_path):
        source_dir = Path(source_dir)
        output_path = Path(output_path)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        if output_path.suffix == '.zip':
            with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as archive:
                for path in source_dir.rglob("*"):
                    archive.write(path, path.relative_to(source_dir))
        elif output_path.name.endswith('.tar.gz'):
             with tarfile.open(output_path, 'w:gz') as archive:
                archive.add(source_dir, arcname='.')
        else:
            raise ValueError(f"Nicht unterstützter Archivtyp: {output_path.suffix}")
        print(f"Archiv {output_path} erfolgreich erstellt")

if __name__ == "__main__":
    project_dir = Path("my_project")
    (project_dir / "data").mkdir(parents=True, exist_ok=True)
    (project_dir / "main.py").write_text("print('hello')")

    manager = ArchiveManager()
    archive_file = Path("backups/my_project.tar.gz")
    manager.create(project_dir, archive_file)

    extract_dir = Path("restored_project")
    manager.extract(archive_file, extract_dir)
```

## Abschließende Gedanken

Sie haben gerade zehn leistungsstarke, praktische Muster für Dateisystemoperationen mithilfe des `pathlib`-Moduls von Python erkundet.

- **Umfassen Sie `pathlib`:** Sein objektorientierter Ansatz ist sauberer, sicherer und ausdrucksstärker als alte, stringbasierte Methoden. Machen Sie es zu Ihrem Standardwerkzeug für alle Pfadmanipulationen.
- **Sicherheit zuerst:** Validieren Sie immer externe Eingaben mit `is_relative_to`, schreiben Sie kritische Dateien atomar und extrahieren Sie Archive sicher.
- **Lesbarkeit zählt:** Code, der `pathlib` verwendet, ist oft selbstdokumentierend. Eine Kette von Methoden auf einem `Path`-Objekt ist weitaus leichter zu verfolgen als eine Reihe verschachtelter <router-link to="/modules/os-module#linux-and-windows-paths">os.path.join</router-link>-Aufrufe.

Indem Sie diese Muster in Ihre Arbeit integrieren, schreiben Sie Python-Code, der nicht nur professioneller ist, sondern auch erheblich robuster und sicherer. Viel Spaß beim Codieren!
