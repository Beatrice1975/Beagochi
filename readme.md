# Beagochi

Beagochi è un gioco web di gamification in cui puoi selezionare fino a 5 attività quotidiane da completare per guadagnare XP e far evolvere la tua creatura. Il gioco presenta una progressione a stadi (animazioni) che si ripete in cicli, con medaglie (bronzo, argento, oro) visualizzate accanto al numero di livello per indicare il completamento dei cicli.

## Italiano

### Come funziona il gioco
- **Attività quotidiane:**  
  Ogni giorno puoi scegliere fino a 5 attività da un elenco ordinato. Le attività vengono aggiunte alla lista delle attività da completare.
  
- **Completamento delle attività:**  
  Cliccando il pulsante "Completato" accanto a ciascuna attività, questa viene rimossa dalla lista e guadagni 10 XP.
  
- **Evoluzione della creatura:**  
  Man mano che accumuli XP, la tua creatura evolve attraverso una serie di stadi animati. La progressione degli stadi si basa su determinate soglie di XP.
  
- **Cicli e medaglie:**  
  Una volta completato il ciclo base, la sequenza degli stadi si ripete. Nei cicli successivi viene visualizzata una medaglia accanto al numero di livello:
  - **Bronzo:** nel primo ciclo ripetuto.
  - **Argento:** nel secondo ciclo.
  - **Oro:** nel terzo ciclo.
  
- **Salvataggio dei progressi:**  
  XP, livello e altri dati sono salvati nel **localStorage** del browser. Questo significa che, se chiudi e riapri il gioco, i tuoi punti e il tuo livello saranno cumulativi. Al cambio di giorno, solo la lista delle attività viene resettata per permetterti di scegliere 5 nuove attività, mentre XP e livello continuano ad accumularsi.

### Come utilizzare il gioco
1. Apri la pagina del gioco nel tuo browser.
2. Seleziona fino a 5 attività dall'elenco disponibile (sono ordinate alfabeticamente).
3. Completa le attività cliccando sul pulsante "Completato" accanto ad ognuna.
4. Guarda la tua creatura evolversi mentre accumuli XP e livelli.  
   Il numero di livello mostrerà, accanto ad esso, una medaglia (bronzo, argento o oro) a seconda del ciclo attuale.
5. I tuoi progressi vengono salvati automaticamente nel browser, quindi anche chiudendo la pagina, XP e livello rimarranno cumulativi per i giorni successivi.

---

## English

### How the Game Works
- **Daily Activities:**  
  Every day you can select up to 5 activities from an ordered list. These tasks are added to a list of tasks you need to complete.
  
- **Completing Tasks:**  
  When you click the "Completato" (Completed) button next to a task, that task is removed from the list and you earn 10 XP.
  
- **Creature Evolution:**  
  As you accumulate XP, your creature evolves through a series of animated stages. The progression is based on specific XP thresholds.
  
- **Cycles and Medals:**  
  After completing the base cycle, the stage sequence repeats in cycles. In subsequent cycles a medal is displayed next to the level number:
  - **Bronze:** in the first repeated cycle.
  - **Silver:** in the second cycle.
  - **Gold:** in the third cycle.
  
- **Saving Progress:**  
  XP, level, and other data are saved in the browser's **localStorage**. This means that if you close and reopen the game, your XP and level remain cumulative. At the start of a new day, only the list of daily activities is reset, allowing you to choose 5 new tasks, while your XP and level continue to accumulate.

### How to Use the Game
1. Open the game page in your browser.
2. Select up to 5 activities from the available list (sorted alphabetically).
3. Complete the tasks by clicking the "Completato" (Completed) button next to each.
4. Watch your creature evolve as you accumulate XP and levels.  
   The level number will display a medal (bronze, silver, or gold) depending on the current cycle.
5. Your progress is saved automatically in your browser, so even if you close the page, your XP and level remain cumulative for subsequent days.

---

This README explains how Beagochi works, how it saves your progress, and how you can continue to level up your creature each day.
